import { remark } from 'remark';
import { SKIP, visit } from 'unist-util-visit';
import type { Link, Root, Text } from 'mdast';
import type { Parent } from 'unist';

type process_ast_options = {
  markdown: string;
  keep_images: boolean;
  normalize_empty_links: boolean;
};

type visit_state = {
  removed_images: number;
  normalized_links: number;
};

type text_node_options = {
  value: string;
};

export function process_ast({
  markdown,
  keep_images,
  normalize_empty_links,
}: process_ast_options): string {
  console.log({
    action: 'process_ast_start',
    markdown_length: markdown.length,
    keep_images,
    normalize_empty_links,
  });

  if (keep_images == true && normalize_empty_links != true) {
    console.log({
      action: 'process_ast_skip',
      reason: 'no_ast_changes_requested',
    });

    return markdown;
  }

  const tree = remark().parse(markdown) as Root;
  const state: visit_state = {
    removed_images: 0,
    normalized_links: 0,
  };

  if (keep_images != true) {
    remove_image_nodes({
      tree,
      state,
    });
  }

  if (normalize_empty_links == true) {
    normalize_empty_link_nodes({
      tree,
      state,
    });
  }

  const out = remark().stringify(tree);

  console.log({
    action: 'process_ast_done',
    markdown_length: out.length,
    removed_images: state.removed_images,
    normalized_links: state.normalized_links,
  });

  return out;
}

function remove_image_nodes({
  tree,
  state,
}: {
  tree: Root;
  state: visit_state;
}): void {
  visit(tree, function (node, index, parent) {
    if (!parent) return;
    if (index == null) return;

    if (node.type == 'image' || node.type == 'imageReference') {
      const parent_node = parent as Parent;

      parent_node.children.splice(index, 1);
      state.removed_images += 1;

      return [SKIP, index];
    }
  });
}

function normalize_empty_link_nodes({
  tree,
  state,
}: {
  tree: Root;
  state: visit_state;
}): void {
  visit(tree, function (node) {
    if (node.type != 'link') return;

    const link_node = node as Link;
    const text = get_node_text({ node: link_node });

    if (text.trim().length > 0) return;

    link_node.children = [
      make_text_node({
        value: 'link',
      }),
    ];

    state.normalized_links += 1;

    console.log({
      action: 'normalize_empty_link',
      url: link_node.url,
    });
  });
}

function get_node_text({ node }: { node: unknown }): string {
  if (!node) return '';

  const typed_node = node as {
    type?: string;
    value?: string;
    children?: unknown[];
  };

  if (typed_node.type == 'text' || typed_node.type == 'inlineCode') {
    return typed_node.value || '';
  }

  if (!typed_node.children) return '';

  let out = '';

  for (const child of typed_node.children) {
    out = out + get_node_text({ node: child });
  }

  return out;
}

function make_text_node({ value }: text_node_options): Text {
  return {
    type: 'text',
    value,
  };
}
