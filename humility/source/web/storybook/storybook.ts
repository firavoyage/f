import { scroll } from 'web/component/scroll'

type storybook_props = {
  components: Record<string, any>
}

export function storybook({ components }: storybook_props) {
  return h(
    'app',
    h(
      scroll,
      h(
        'storybook',
        h(
          'storybook_components',
          ...map(entries(components), ([name, component]) =>
            h(
              'storybook_component',
              {},
              h('storybook_component_name', {}, name),
              h('storybook_component_sample', {}, component),
            ),
          ),
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
