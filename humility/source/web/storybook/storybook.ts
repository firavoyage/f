type storybook_props = {
  components: Record<string, any>
}

export function storybook({ components }: storybook_props) {
  return h(
    'main.storybook',
    h(
      'div.storybook_components',
      ...map(entries(components), ([name, component]) =>
        h(
          'section.storybook_component',
          {},
          h('h2.storybook_component_name', {}, name),
          h('div.storybook_component_sample', {}, component),
        ),
      ),
    ),
  )
  // return h(
  //   'main.storybook',
  //   h(
  //     'div.storybook_components',
  //     ...map(entries(components), ([name, component]) =>
  //       h(
  //         'section.storybook_component',
  //         {},
  //         h('h2.storybook_component_name', {}, name),
  //         h('div.storybook_component_sample', {}, component),
  //       ),
  //     ),
  //   ),
  // )
}
