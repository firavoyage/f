const glossary = {
  aspect: {
    prop: [['ratio', 'aspect-ratio']],
  },
  columns: {
    prop: [
      ['number', 'columns'],
      ['length', 'columns'],
      [
        [
          'auto',
          '3xs',
          '2xs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
        ],
        'columns',
      ],
    ],
  },
  'break-after': {
    prop: [
      [
        [
          'auto',
          'avoid',
          'all',
          'avoid-page',
          'page',
          'left',
          'right',
          'column',
        ],
        'break-after',
      ],
    ],
  },
  'break-before': {
    prop: [
      [
        [
          'auto',
          'avoid',
          'all',
          'avoid-page',
          'page',
          'left',
          'right',
          'column',
        ],
        'break-before',
      ],
    ],
  },
  'break-inside': {
    prop: [[['auto', 'avoid', 'avoid-page', 'avoid-column'], 'break-inside']],
  },
  'box-decoration': {
    prop: [[['slice', 'clone'], 'box-decoration-break']],
  },
  box: {
    prop: [[['border', 'content'], 'box-sizing']],
  },
  block: {
    style: ['display', 'block'],
  },
  inline: {
    style: ['display', 'inline'],
  },
  'inline-block': {
    style: ['display', 'inline-block'],
  },
  'flow-root': {
    style: ['display', 'flow-root'],
  },
  contents: {
    style: ['display', 'contents'],
  },
  hidden: {
    style: ['display', 'none'],
  },
  table: {
    style: ['display', 'table'],
  },
  'inline-table': {
    style: ['display', 'inline-table'],
  },
  'table-caption': {
    style: ['display', 'table-caption'],
  },
  'table-cell': {
    style: ['display', 'table-cell'],
  },
  'table-column': {
    style: ['display', 'table-column'],
  },
  'table-column-group': {
    style: ['display', 'table-column-group'],
  },
  'table-footer-group': {
    style: ['display', 'table-footer-group'],
  },
  'table-header-group': {
    style: ['display', 'table-header-group'],
  },
  'table-row-group': {
    style: ['display', 'table-row-group'],
  },
  'table-row': {
    style: ['display', 'table-row'],
  },
  'list-item': {
    style: ['display', 'list-item'],
  },
  float: {
    prop: [[['start', 'end', 'right', 'left', 'none'], 'float']],
  },
  clear: {
    prop: [[['start', 'end', 'right', 'left', 'both', 'none'], 'clear']],
  },
  isolate: {
    style: ['isolation', 'isolate'],
  },
  'isolation-auto': {
    style: ['isolation', 'auto'],
  },
  object: {
    prop: [
      [['contain', 'cover', 'fill', 'none', 'scale-down'], 'object-fit'],
      ['position', 'object-position'],
    ],
  },
  overflow: {
    prop: [
      [
        ['auto', 'hidden', 'clip', 'visible', 'scroll'],
        'overflow',
      ],
    ],
  },
  'overflow-x': {
    prop: [
      [
        ['auto', 'hidden', 'clip', 'visible', 'scroll'],
        'overflow-x',
      ],
    ],
  },
  'overflow-y': {
    prop: [
      [
        ['auto', 'hidden', 'clip', 'visible', 'scroll'],
        'overflow-y',
      ],
    ],
  },
  overscroll: {
    prop: [
      [
        ['auto', 'contain', 'none'],
        [
          'overscroll-behavior',
          'overscroll-behavior-x',
          'overscroll-behavior-y',
        ],
      ],
    ],
  },
  static: {
    style: ['position', 'static'],
  },
  fixed: {
    style: ['position', 'fixed'],
  },
  absolute: {
    style: ['position', 'absolute'],
  },
  relative: {
    style: ['position', 'relative'],
  },
  sticky: {
    style: ['position', 'sticky'],
  },
  inset: {
    prop: [
      ['length', ['inset-top', 'inset-right', 'inset-bottom', 'inset-left']],
    ],
  },
  'inset-x': {
    prop: [['length', ['left', 'right']]],
  },
  'inset-y': {
    prop: [['length', ['top', 'bottom']]],
  },
  'inset-s': {
    prop: [['length', 'inset-inline-start']],
  },
  'inset-e': {
    prop: [['length', 'inset-inline-end']],
  },
  top: {
    prop: [['length', 'top']],
  },
  right: {
    prop: [['length', 'right']],
  },
  bottom: {
    prop: [['length', 'bottom']],
  },
  left: {
    prop: [['length', 'left']],
  },
  start: {
    prop: [['length', 'inset-inline-start']],
  },
  end: {
    prop: [['length', 'inset-inline-end']],
  },
  visible: {
    style: ['visibility', 'visible'],
  },
  invisible: {
    style: ['visibility', 'hidden'],
  },
  collapse: {
    style: ['visibility', 'collapse'],
  },
  z: {
    prop: [['number', 'z-index']],
  },
  basis: {
    prop: [
      ['length', 'flex-basis'],
      ['percentage', 'flex-basis'],
      [['auto', 'full', 'min', 'max', 'fit'], 'flex-basis'],
    ],
  },
  flex: {
    prop: [
      [['1', 'auto', 'initial', 'none'], 'flex'],
      ['number', 'flex'],
    ],
    style: ['display', 'flex'],
  },
  grow: {
    prop: [['number', 'flex-grow']],
    style: ['flex-grow', '1'],
  },
  shrink: {
    prop: [['number', 'flex-shrink']],
    style: ['flex-shrink', '1'],
  },
  order: {
    prop: [
      ['number', 'order'],
      [['first', 'last', 'none'], 'order'],
    ],
  },
  'grid-cols': {
    prop: [
      ['number', 'grid-template-columns'],
      ['grid-template', 'grid-template-columns'],
    ],
  },
  'col-span': {
    prop: [
      ['number', 'grid-column'],
      [['full'], 'grid-column'],
    ],
  },
  'col-start': {
    prop: [
      ['number', 'grid-column-start'],
      [['auto'], 'grid-column-start'],
    ],
  },
  'col-end': {
    prop: [
      ['number', 'grid-column-end'],
      [['auto'], 'grid-column-end'],
    ],
  },
  'grid-rows': {
    prop: [
      ['number', 'grid-template-rows'],
      ['grid-template', 'grid-template-rows'],
    ],
  },
  'row-span': {
    prop: [
      ['number', 'grid-row'],
      [['full'], 'grid-row'],
    ],
  },
  'row-start': {
    prop: [
      ['number', 'grid-row-start'],
      [['auto'], 'grid-row-start'],
    ],
  },
  'row-end': {
    prop: [
      ['number', 'grid-row-end'],
      [['auto'], 'grid-row-end'],
    ],
  },
  'grid-flow': {
    prop: [
      [['row', 'col', 'dense', 'row-dense', 'col-dense'], 'grid-auto-flow'],
    ],
  },
  'auto-cols': {
    prop: [[['auto', 'min', 'max', 'fr'], 'grid-auto-columns']],
  },
  'auto-rows': {
    prop: [[['auto', 'min', 'max', 'fr'], 'grid-auto-rows']],
  },
  gap: {
    prop: [['length', ['gap', 'column-gap', 'row-gap']]],
  },
  'gap-x': {
    prop: [['length', 'column-gap']],
  },
  'gap-y': {
    prop: [['length', 'row-gap']],
  },
  justify: {
    prop: [
      [
        [
          'normal',
          'start',
          'end',
          'center',
          'between',
          'around',
          'evenly',
          'stretch',
        ],
        'justify-content',
      ],
      [['start', 'end', 'center', 'stretch'], 'justify-items'],
      [['auto', 'start', 'end', 'center', 'stretch'], 'justify-self'],
    ],
  },
  items: {
    prop: [[['start', 'end', 'center', 'baseline', 'stretch'], 'align-items']],
  },
  content: {
    prop: [
      [
        [
          'normal',
          'center',
          'start',
          'end',
          'between',
          'around',
          'evenly',
          'baseline',
          'stretch',
        ],
        'align-content',
      ],
      ['content', 'content'],
    ],
  },
  self: {
    prop: [
      [['auto', 'start', 'end', 'center', 'stretch', 'baseline'], 'align-self'],
    ],
  },
  'place-content': {
    prop: [
      [
        [
          'center',
          'start',
          'end',
          'between',
          'around',
          'evenly',
          'baseline',
          'stretch',
        ],
        'place-content',
      ],
    ],
  },
  'place-items': {
    prop: [[['start', 'end', 'center', 'baseline', 'stretch'], 'place-items']],
  },
  'place-self': {
    prop: [[['auto', 'start', 'end', 'center', 'stretch'], 'place-self']],
  },
  p: {
    prop: [
      [
        'length',
        ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
      ],
    ],
  },
  px: {
    prop: [['length', ['padding-left', 'padding-right']]],
  },
  py: {
    prop: [['length', ['padding-top', 'padding-bottom']]],
  },
  ps: {
    prop: [['length', 'padding-inline-start']],
  },
  pe: {
    prop: [['length', 'padding-inline-end']],
  },
  pt: {
    prop: [['length', 'padding-top']],
  },
  pr: {
    prop: [['length', 'padding-right']],
  },
  pb: {
    prop: [['length', 'padding-bottom']],
  },
  pl: {
    prop: [['length', 'padding-left']],
  },
  m: {
    prop: [
      [
        'length',
        ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
      ],
    ],
  },
  mx: {
    prop: [['length', ['margin-left', 'margin-right']]],
  },
  my: {
    prop: [['length', ['margin-top', 'margin-bottom']]],
  },
  ms: {
    prop: [['length', 'margin-inline-start']],
  },
  me: {
    prop: [['length', 'margin-inline-end']],
  },
  mt: {
    prop: [['length', 'margin-top']],
  },
  mr: {
    prop: [['length', 'margin-right']],
  },
  mb: {
    prop: [['length', 'margin-bottom']],
  },
  ml: {
    prop: [['length', 'margin-left']],
  },
  'space-x': {
    prop: [['length', 'margin-inline-start']],
  },
  'space-y': {
    prop: [['length', 'margin-top']],
  },
  size: {
    prop: [['length', ['width', 'height']]],
  },
  w: {
    prop: [
      ['length', 'width'],
      [['auto', 'full', 'screen', 'min', 'max', 'fit'], 'width'],
    ],
  },
  h: {
    prop: [
      ['length', 'height'],
      [['auto', 'full', 'screen', 'min', 'max', 'fit'], 'height'],
    ],
  },
  'min-w': {
    prop: [
      ['length', 'min-width'],
      [['0', 'full', 'min', 'max', 'fit'], 'min-width'],
    ],
  },
  'min-h': {
    prop: [
      ['length', 'min-height'],
      [['0', 'full', 'screen', 'min', 'max', 'fit'], 'min-height'],
    ],
  },
  'max-w': {
    prop: [
      ['length', 'max-width'],
      [
        [
          'none',
          'full',
          'min',
          'max',
          'fit',
          'prose',
          'screen-sm',
          'screen-md',
          'screen-lg',
          'screen-xl',
          'screen-2xl',
        ],
        'max-width',
      ],
    ],
  },
  'max-h': {
    prop: [
      ['length', 'max-height'],
      [['none', 'full', 'screen', 'min', 'max', 'fit'], 'max-height'],
    ],
  },
  font: {
    prop: [
      ['font-family', 'font-family'],
      ['font-weight', 'font-weight'],
    ],
  },
  text: {
    prop: [
      ['length', 'font-size'],
      ['color', 'color'],
      [['left', 'center', 'right', 'justify', 'start', 'end'], 'text-align'],
      [['ellipsis', 'clip'], 'text-overflow'],
      [['wrap', 'nowrap', 'balance', 'pretty'], 'text-wrap'],
    ],
  },
  'text-xs': {
    style: [
      ['font-size', '0.75rem'],
      ['line-height', '1rem'],
    ],
  },
  'text-sm': {
    style: [
      ['font-size', '0.875rem'],
      ['line-height', '1.25rem'],
    ],
  },
  'text-md': {
    style: [
      ['font-size', '1rem'],
      ['line-height', '1.5rem'],
    ],
  },
  'text-base': {
    style: [
      ['font-size', '1rem'],
      ['line-height', '1.5rem'],
    ],
  },
  'text-lg': {
    style: [
      ['font-size', '1.125rem'],
      ['line-height', '1.75rem'],
    ],
  },
  'text-xl': {
    style: [
      ['font-size', '1.25rem'],
      ['line-height', '1.75rem'],
    ],
  },
  'text-2xl': {
    style: [
      ['font-size', '1.5rem'],
      ['line-height', '2rem'],
    ],
  },
  'text-3xl': {
    style: [
      ['font-size', '1.875rem'],
      ['line-height', '2.25rem'],
    ],
  },
  'text-4xl': {
    style: [
      ['font-size', '2.25rem'],
      ['line-height', '2.5rem'],
    ],
  },
  'text-5xl': {
    style: [
      ['font-size', '3rem'],
      ['line-height', '1'],
    ],
  },
  'text-6xl': {
    style: [
      ['font-size', '3.75rem'],
      ['line-height', '1'],
    ],
  },
  'text-7xl': {
    style: [
      ['font-size', '4.5rem'],
      ['line-height', '1'],
    ],
  },
  'text-8xl': {
    style: [
      ['font-size', '6rem'],
      ['line-height', '1'],
    ],
  },
  'text-9xl': {
    style: [
      ['font-size', '8rem'],
      ['line-height', '1'],
    ],
  },
  tracking: {
    prop: [['length', 'letter-spacing']],
  },
  leading: {
    prop: [['length', 'line-height']],
  },
  'line-clamp': {
    prop: [
      ['number', 'line-clamp'],
      [['none'], 'line-clamp'],
    ],
  },
  list: {
    prop: [
      [
        [
          'none',
          'disc',
          'decimal',
          'circle',
          'square',
          'upper-alpha',
          'lower-alpha',
          'upper-roman',
          'lower-roman',
        ],
        'list-style-type',
      ],
      [['inside', 'outside'], 'list-style-position'],
      ['image', 'list-style-image'],
    ],
  },
  placeholder: {
    prop: [['color', 'color']],
  },
  decoration: {
    prop: [
      ['color', 'text-decoration-color'],
      [
        ['solid', 'double', 'dotted', 'dashed', 'wavy'],
        'text-decoration-style',
      ],
      ['length', 'text-decoration-thickness'],
    ],
  },
  'underline-offset': {
    prop: [['length', 'text-underline-offset']],
  },
  indent: {
    prop: [['length', 'text-indent']],
  },
  align: {
    prop: [
      [
        [
          'baseline',
          'top',
          'middle',
          'bottom',
          'text-top',
          'text-bottom',
          'sub',
          'super',
        ],
        'vertical-align',
      ],
    ],
  },
  whitespace: {
    prop: [
      [
        ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'],
        'white-space',
      ],
    ],
  },
  break: {
    prop: [
      [['normal', 'words', 'all', 'keep'], 'overflow-wrap'],
      [['normal', 'words', 'all'], 'word-break'],
    ],
  },
  hyphens: {
    prop: [[['none', 'manual', 'auto'], 'hyphens']],
  },
  antialiased: {
    style: ['-webkit-font-smoothing', 'antialiased'],
  },
  'subpixel-antialiased': {
    style: ['-webkit-font-smoothing', 'auto'],
  },
  italic: {
    style: ['font-style', 'italic'],
  },
  'not-italic': {
    style: ['font-style', 'normal'],
  },
  uppercase: {
    style: ['text-transform', 'uppercase'],
  },
  lowercase: {
    style: ['text-transform', 'lowercase'],
  },
  capitalize: {
    style: ['text-transform', 'capitalize'],
  },
  'normal-case': {
    style: ['text-transform', 'none'],
  },
  underline: {
    style: ['text-decoration-line', 'underline'],
  },
  overline: {
    style: ['text-decoration-line', 'overline'],
  },
  'line-through': {
    style: ['text-decoration-line', 'line-through'],
  },
  'no-underline': {
    style: ['text-decoration-line', 'none'],
  },
  bg: {
    prop: [
      ['color', 'background-color'],
      ['image', 'background-image'],
      ['position', 'background-position'],
      [['auto', 'cover', 'contain'], 'background-size'],
      [
        [
          'repeat',
          'no-repeat',
          'repeat-x',
          'repeat-y',
          'repeat-round',
          'repeat-space',
        ],
        'background-repeat',
      ],
      [['fixed', 'local', 'scroll'], 'background-attachment'],
      [['border', 'padding', 'content', 'text'], 'background-clip'],
      [['border', 'padding', 'content'], 'background-origin'],
    ],
  },
  from: {
    prop: [
      ['color', '--tw-gradient-from'],
      ['percentage', '--tw-gradient-from-position'],
    ],
  },
  via: {
    prop: [
      ['color', '--tw-gradient-via'],
      ['percentage', '--tw-gradient-via-position'],
    ],
  },
  to: {
    prop: [
      ['color', '--tw-gradient-to'],
      ['percentage', '--tw-gradient-to-position'],
    ],
  },
  rounded: {
    prop: [
      [
        'radius',
        [
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
        ],
      ],
      // [
      //   'length',
      //   [
      //     'border-top-left-radius',
      //     'border-top-right-radius',
      //     'border-bottom-right-radius',
      //     'border-bottom-left-radius',
      //   ],
      // ],
      // [
      //   ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      //   [
      //     'border-top-left-radius',
      //     'border-top-right-radius',
      //     'border-bottom-right-radius',
      //     'border-bottom-left-radius',
      //   ],
      // ],
    ],
  },
  'rounded-t': {
    prop: [['radius', ['border-top-left-radius', 'border-top-right-radius']]],
  },
  'rounded-r': {
    prop: [
      ['radius', ['border-top-right-radius', 'border-bottom-right-radius']],
    ],
  },
  'rounded-b': {
    prop: [
      ['radius', ['border-bottom-right-radius', 'border-bottom-left-radius']],
    ],
  },
  'rounded-l': {
    prop: [['radius', ['border-top-left-radius', 'border-bottom-left-radius']]],
  },
  'rounded-s': {
    prop: [
      ['radius', ['border-start-start-radius', 'border-end-start-radius']],
    ],
  },
  'rounded-e': {
    prop: [['radius', ['border-start-end-radius', 'border-end-end-radius']]],
  },
  border: {
    prop: [
      [
        'radius',
        [
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
        ],
      ],
      [
        'color',
        [
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
        ],
      ],
      [
        ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none'],
        'border-style',
      ],
    ],
  },
  'border-x': {
    prop: [
      ['radius', ['border-left-width', 'border-right-width']],
      ['color', ['border-left-color', 'border-right-color']],
    ],
  },
  'border-y': {
    prop: [
      ['radius', ['border-top-width', 'border-bottom-width']],
      ['color', ['border-top-color', 'border-bottom-color']],
    ],
  },
  'border-s': {
    prop: [
      ['radius', 'border-inline-start-width'],
      ['color', 'border-inline-start-color'],
    ],
  },
  'border-e': {
    prop: [
      ['radius', 'border-inline-end-width'],
      ['color', 'border-inline-end-color'],
    ],
  },
  'border-t': {
    prop: [
      ['radius', 'border-top-width'],
      ['color', 'border-top-color'],
    ],
  },
  'border-r': {
    prop: [
      ['radius', 'border-right-width'],
      ['color', 'border-right-color'],
    ],
  },
  'border-b': {
    prop: [
      ['radius', 'border-bottom-width'],
      ['color', 'border-bottom-color'],
    ],
  },
  'border-l': {
    prop: [
      ['radius', 'border-left-width'],
      ['color', 'border-left-color'],
    ],
  },
  'divide-x': {
    prop: [
      ['radius', 'border-inline-start-width'],
      ['color', 'border-color'],
    ],
  },
  'divide-y': {
    prop: [
      ['radius', 'border-top-width'],
      ['color', 'border-color'],
    ],
  },
  outline: {
    prop: [
      ['radius', 'outline-width'],
      ['color', 'outline-color'],
      [
        ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double'],
        'outline-style',
      ],
      ['radius', 'outline-offset'],
    ],
  },
  ring: {
    prop: [
      ['radius', '--tw-ring-width'],
      ['color', '--tw-ring-color'],
    ],
  },
  'ring-offset': {
    prop: [
      ['radius', '--tw-ring-offset-width'],
      ['color', '--tw-ring-offset-color'],
    ],
  },
  shadow: {
    prop: [
      ['shadow', 'box-shadow'],
      ['color', 'box-shadow-color'],
    ],
  },
  'text-shadow': {
    prop: [
      ['shadow', 'text-shadow'],
      ['color', '--tw-text-shadow-color'],
    ],
  },
  opacity: {
    prop: [
      ['percentage', 'opacity'],
      ['number', 'opacity'],
    ],
  },
  'mix-blend': {
    prop: [
      [
        [
          'normal',
          'multiply',
          'screen',
          'overlay',
          'darken',
          'lighten',
          'color-dodge',
          'color-burn',
          'hard-light',
          'soft-light',
          'difference',
          'exclusion',
          'hue',
          'saturation',
          'color',
          'luminosity',
          'plus-darker',
          'plus-lighter',
        ],
        'mix-blend-mode',
      ],
    ],
  },
  'bg-blend': {
    prop: [
      [
        [
          'normal',
          'multiply',
          'screen',
          'overlay',
          'darken',
          'lighten',
          'color-dodge',
          'color-burn',
          'hard-light',
          'soft-light',
          'difference',
          'exclusion',
          'hue',
          'saturation',
          'color',
          'luminosity',
        ],
        'background-blend-mode',
      ],
    ],
  },
  blur: {
    prop: [['length', '--tw-blur']],
  },
  brightness: {
    prop: [['percentage', 'filter']],
  },
  contrast: {
    prop: [['percentage', 'filter']],
  },
  'drop-shadow': {
    prop: [
      ['shadow', 'filter'],
      ['color', '--tw-drop-shadow-color'],
    ],
  },
  grayscale: {
    prop: [['percentage', 'filter']],
  },
  'hue-rotate': {
    prop: [['angle', 'filter']],
  },
  invert: {
    prop: [['percentage', 'filter']],
  },
  saturate: {
    prop: [['percentage', 'filter']],
  },
  sepia: {
    prop: [['percentage', 'filter']],
  },
  'backdrop-blur': {
    prop: [['length', '--tw-backdrop-blur']],
  },
  'backdrop-brightness': {
    prop: [['percentage', 'backdrop-filter']],
  },
  'backdrop-contrast': {
    prop: [['percentage', 'backdrop-filter']],
  },
  'backdrop-grayscale': {
    prop: [['percentage', 'backdrop-filter']],
  },
  'backdrop-hue-rotate': {
    prop: [['angle', 'backdrop-filter']],
  },
  'backdrop-invert': {
    prop: [['percentage', 'backdrop-filter']],
  },
  'backdrop-opacity': {
    prop: [['percentage', 'backdrop-filter']],
  },
  'backdrop-saturate': {
    prop: [['percentage', 'backdrop-filter']],
  },
  'backdrop-sepia': {
    prop: [['percentage', 'backdrop-filter']],
  },
  transform: {
    prop: [[['gpu', 'cpu', 'none'], 'transform']],
  },
  'transform-gpu': {
    style: ['transform', 'translate-z(0)'],
  },
  'transform-cpu': {
    style: ['transform', 'none'],
  },
  origin: {
    prop: [['position', 'transform-origin']],
  },
  perspective: {
    prop: [
      ['length', 'perspective'],
      [
        ['none', 'dramatic', 'near', 'normal', 'midrange', 'distant'],
        'perspective',
      ],
    ],
  },
  'perspective-origin': {
    prop: [['position', 'perspective-origin']],
  },
  rotate: {
    prop: [['angle', 'rotate']],
  },
  scale: {
    prop: [
      ['number', ['scale', 'scale-x', 'scale-y']],
      ['percentage', ['scale', 'scale-x', 'scale-y']],
    ],
  },
  skew: {
    prop: [['angle', ['skew-x', 'skew-y']]],
  },
  translate: {
    prop: [
      ['length', ['translate', 'translate-x', 'translate-y']],
      ['percentage', ['translate', 'translate-x', 'translate-y']],
    ],
  },
  transition: {
    prop: [
      [
        ['none', 'all', 'colors', 'opacity', 'shadow', 'transform', 'all'],
        'transition-property',
      ],
    ],
  },
  duration: {
    prop: [['time', 'transition-duration']],
  },
  ease: {
    prop: [['easing', 'transition-timing-function']],
  },
  delay: {
    prop: [['time', 'transition-delay']],
  },
  animate: {
    prop: [[['none', 'spin', 'ping', 'pulse', 'bounce'], 'animation']],
  },
  fill: {
    prop: [['color', 'fill']],
  },
  stroke: {
    prop: [
      ['color', 'stroke'],
      ['length', 'stroke-width'],
    ],
  },
  accent: {
    prop: [['color', 'accent-color']],
  },
  appearance: {
    prop: [[['none', 'auto'], 'appearance']],
  },
  caret: {
    prop: [['color', 'caret-color']],
  },
  scheme: {
    prop: [
      [
        ['normal', 'light', 'dark', 'light-dark', 'only-light', 'only-dark'],
        'color-scheme',
      ],
    ],
  },
  cursor: {
    prop: [
      [
        [
          'auto',
          'default',
          'pointer',
          'wait',
          'text',
          'move',
          'help',
          'not-allowed',
          'none',
          'context-menu',
          'progress',
          'cell',
          'crosshair',
          'vertical-text',
          'alias',
          'copy',
          'no-drop',
          'grab',
          'grabbing',
          'all-scroll',
          'col-resize',
          'row-resize',
          'n-resize',
          'e-resize',
          's-resize',
          'w-resize',
          'ew-resize',
          'ns-resize',
          'nesw-resize',
          'nwse-resize',
          'zoom-in',
          'zoom-out',
        ],
        'cursor',
      ],
    ],
  },
  'field-sizing': {
    prop: [[['fixed', 'content'], 'field-sizing']],
  },
  'pointer-events': {
    prop: [[['auto', 'none'], 'pointer-events']],
  },
  resize: {
    prop: [[['none', 'x', 'y'], 'resize']],
  },
  scroll: {
    prop: [
      [['auto', 'smooth'], 'scroll-behavior'],
      [['auto', 'contain', 'none'], 'overscroll-behavior'],
    ],
  },
  'scroll-m': {
    prop: [['length', 'scroll-margin']],
  },
  'scroll-mx': {
    prop: [['length', ['scroll-margin-left', 'scroll-margin-right']]],
  },
  'scroll-my': {
    prop: [['length', ['scroll-margin-top', 'scroll-margin-bottom']]],
  },
  'scroll-mt': {
    prop: [['length', 'scroll-margin-top']],
  },
  'scroll-mr': {
    prop: [['length', 'scroll-margin-right']],
  },
  'scroll-mb': {
    prop: [['length', 'scroll-margin-bottom']],
  },
  'scroll-ml': {
    prop: [['length', 'scroll-margin-left']],
  },
  'scroll-p': {
    prop: [['length', 'scroll-padding']],
  },
  'scroll-px': {
    prop: [['length', ['scroll-padding-left', 'scroll-padding-right']]],
  },
  'scroll-py': {
    prop: [['length', ['scroll-padding-top', 'scroll-padding-bottom']]],
  },
  'scroll-pt': {
    prop: [['length', 'scroll-padding-top']],
  },
  'scroll-pr': {
    prop: [['length', 'scroll-padding-right']],
  },
  'scroll-pb': {
    prop: [['length', 'scroll-padding-bottom']],
  },
  'scroll-pl': {
    prop: [['length', 'scroll-padding-left']],
  },
  snap: {
    prop: [
      [['none', 'x', 'y', 'both'], 'scroll-snap-type'],
      [['mandatory', 'proximity'], 'scroll-snap-type'],
      [['start', 'end', 'center', 'align-none'], 'scroll-snap-align'],
      [['normal', 'always'], 'scroll-snap-stop'],
    ],
  },
  touch: {
    prop: [
      [
        [
          'auto',
          'none',
          'pan-x',
          'pan-left',
          'pan-right',
          'pan-y',
          'pan-up',
          'pan-down',
          'pinch-zoom',
          'manipulation',
        ],
        'touch-action',
      ],
    ],
  },
  select: {
    prop: [[['none', 'text', 'all', 'auto'], 'user-select']],
  },
  'will-change': {
    prop: [[['auto', 'scroll', 'contents', 'transform'], 'will-change']],
  },
  // 'sr-only': {
  //   style: ['position', 'absolute'],
  // },
  // 'not-sr-only': {
  //   style: ['position', 'static'],
  // },
  // 'forced-color-adjust': {
  //   prop: [[['auto', 'none'], 'forced-color-adjust']],
  // },
}

const positions = {
  center: 'center',
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  'top-left': 'top left',
  'left-top': 'top left',
  'bottom-left': 'bottom left',
  'left-bottom': 'bottom left',
  'top-right': 'top right',
  'right-top': 'top right',
  'bottom-right': 'bottom right',
  'right-bottom': 'bottom right',
}

const font_weights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const lengths = {
  none: 'none',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  prose: '65ch',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  'screen-sm': '640px',
  'screen-md': '768px',
  'screen-lg': '1024px',
  'screen-xl': '1280px',
  'screen-2xl': '1536px',
  'icon-xs': '0.75rem',
  'icon-sm': '0.875rem',
  'icon-base': '1rem',
  'icon-lg': '1.125rem',
  'icon-xl': '1.25rem',
  'icon-2xl': '1.5rem',
  'icon-3xl': '1.875rem',
  'icon-4xl': '2.25rem',
  'icon-5xl': '3rem',
  'icon-6xl': '3.75rem',
  'icon-7xl': '4.5rem',
  'icon-8xl': '6rem',
  'icon-9xl': '8rem',
}

const radii = {
  none: '0px',
  xs: '2px',
  sm: '2px',
  base: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  '4xl': '32px',
  full: '9999px',
}

export function style(theme) {
  let modes = {}

  for (const [k, v] of entries(theme)) {
    if (is(v, 'array')) {
      modes[k] = v

      delete theme[k]
    }
  }

  function is_value(leaf) {
    if (is(leaf, 'number') || is(leaf, 'string')) {
      return true
    }

    if (!is(leaf, 'object')) {
      return false
    }

    let keys = set()
    for (const [k, v] of entries(leaf)) {
      keys.add(k)

      if (!is_value(v)) {
        return false
      }
    }

    for (const [mode, variants] of entries(modes)) {
      let is_subset_of_variants = true

      for (const k of keys) {
        if (!has(variants, k)) {
          is_subset_of_variants = false
          break
        }
      }

      if (is_subset_of_variants) {
        return true
      }
    }

    return false
  }

  let design_tokens = {}

  function traverse(obj, prefix = '') {
    for (const [k, v] of entries(obj)) {
      if (is_value(v)) {
        design_tokens[extend_prefix(prefix, k)] = v
      } else {
        traverse(v, extend_prefix(prefix, k))
      }
    }
  }

  // strip consecutive duplicate keys, e.g. color-red-red -> color-red
  function extend_prefix(prefix, key) {
    let prefix_parts = prefix.split('-')
    let last = prefix_parts[prefix_parts.length - 1]

    if (prefix_parts[0] == '') {
      prefix_parts = []
    }

    if (key == last) {
      return prefix
    } else {
      return [...prefix_parts, key].join('.')
      // return [...prefix_parts, key].join('-')
    }
  }

  traverse(theme)

  let references = set()

  for (const [k, v] of entries(design_tokens)) {
    // const separators = [' ', ',', '/', '(', ')', '+', '-', '*', '/']

    // let separated_value: string = v
    // for (const sep of separators) {
    //   separated_value = separated_value.replaceAll(sep, '__separator__')
    // }

    // let parts = separated_value.split('__separator__')

    // let dereferenced_value = map(parts, (part) => {
    //   // let escaped_part = part.replaceAll()
    //   if (has(design_tokens, part)) {
    //     return css_variable(part)
    //   } else {
    //     return part
    //   }
    // }).join('')

    function dereference(v) {
      let parts = v.split(' ')

      let dereferenced_value = map(parts, (part) => {
        // let escaped_part = part.replaceAll()
        if (has(design_tokens, part)) {
          return css_variable(part)
        } else {
          return part
        }
      }).join(' ')

      return dereferenced_value
    }

    if (is(v, 'object')) {
      for (const [variant, value] of entries(v)) {
        design_tokens[k][variant] = dereference(value)
      }
    } else {
      design_tokens[k] = dereference(v)
    }
  }

  let components = {}

  for (const [k, v] of entries(theme)) {
    if (!is(v, 'object')) {
      continue
    }

    let is_component = true

    for (const [element_k, element_v] of entries(v)) {
      if (!is(element_v, 'string')) {
        is_component = false
        break
      }
    }

    if (is_component) {
      components[k] = v
    }
  }

  // selector -> (prop, value)[]
  let styles = {}

  function append_style(selector, prop, value) {
    if (is(prop, 'array')) {
      const props = prop
      for (const prop of props) {
        append_style(selector, prop, value)
      }
    } else {
      if (!has(styles, selector)) {
        styles[selector] = {}
      }

      styles[selector][prop] = value
    }
  }

  for (const [component, elements] of entries(components)) {
    for (const [element, utility_classes] of entries(elements)) {
      // todo
      let selector = `.${component}_${element}`
      if (component == element) {
        selector += `, .${component}`
      }

      // todo
      let utilities = utility_classes.split(' ')

      for (const utility of utilities) {
        let parts = utility.split('-')

        // try to match longest stem first
        for (const last_index of each(parts.length - 1 + 1, 1, -1)) {
          let stem = parts.slice(0, last_index).join('-')
          let value = parts.slice(last_index).join('-')

          if (has(glossary, stem)) {
            if (has(glossary[stem], 'style')) {
              let pairs = glossary[stem].style

              if (is(pairs[0], 'string')) {
                const pair = pairs
                pairs = [pair]
              }

              for (const [prop, value] of pairs) {
                append_style(selector, prop, value)
              }

              break
            }

            let possible_matches = glossary[stem].prop

            for (const [type, prop] of possible_matches) {
              if (is(type, 'array')) {
                let can_match = false

                // keywords
                for (const keyword of type) {
                  if (value == keyword) {
                    can_match = true

                    append_style(selector, prop, value)
                  }
                }

                if (can_match) {
                  break
                }
              }

              const colors = ['color', 'palette']
              const fonts = ['font', 'typeface']

              if (type == 'length' && is_length(value)) {
                value = length(value)
                append_style(selector, prop, value)
              } else if (type == 'radius' && has(radii, value)) {
                append_style(selector, prop, radii[value])
              } else if (type == 'radius' && is_number(value)) {
                append_style(selector, prop, `${value}px`)
              } else if (type == 'color' && does_exist(value, colors)) {
                append_style(selector, prop, resolve(value, colors))
              } else if (type == 'number' && is_number(value)) {
                append_style(selector, prop, value)
              } else if (type == 'ratio' && has(value, '/')) {
                append_style(selector, prop, value)
              } else if (type == 'percentage' && has(value, '%')) {
                append_style(selector, prop, value)
              } else if (type == 'angle' && has(value, 'deg')) {
                append_style(selector, prop, value)
              } else if (type == 'position' && has(positions, value)) {
                append_style(selector, prop, positions[value])
              } else if (type == 'font-weight' && has(font_weights, value)) {
                append_style(selector, prop, font_weights[value])
              } else if (type == 'font-weight' && is_number(value)) {
                append_style(selector, prop, value)
              } else if (type == 'font-family' && does_exist(value, fonts)) {
                append_style(selector, prop, resolve(value, fonts))
              } else {
                continue
              }

              // is plain number wo suffix
              function is_number(value) {
                return !is(Number(value), 'nil')
              }

              function design_token(value: string) {
                return value.replaceAll('-', '.')
              }

              // does exist such design token
              function does_exist(value, prefixes) {
                value = design_token(value)

                for (const prefix of prefixes) {
                  if (has(design_tokens, `${prefix}.${value}`)) {
                    return true
                  }
                }

                return false
              }

              // resolve to css variable
              function resolve(value, prefixes) {
                value = design_token(value)

                for (const prefix of prefixes) {
                  if (has(design_tokens, `${prefix}.${value}`)) {
                    return css_variable(`${prefix}.${value}`)
                  }
                }
              }

              function is_length(value: string) {
                const length_units = [
                  'rem',
                  'px',
                  'ch',
                  '%',
                  'vh',
                  'vw',
                  'dvh',
                  'dvw',
                  'svh',
                  'svw',
                  'lvh',
                  'lvw',
                  'vmin',
                  'vmax',
                ]

                // number('4px') -> nil, int/parseint('4px') -> 4
                return (
                  is_number(value) ||
                  length_units.some((unit) => value.endsWith(unit)) ||
                  has(lengths, value)
                )
              }

              function length(value) {
                if (is_number(value)) {
                  return `${int(value) / 4}rem`
                }

                return lengths[value] ?? value
              }

              break
            }

            break
          }
        }
      }
    }
  }

  let css = ''

  function append_css(selector, prop, value) {
    css += `${selector} { ${prop}: ${value} }\n`
  }

  for (const [k, v] of entries(design_tokens)) {
    if (!has(references, k)) {
      continue
    }

    if (is(v, 'object')) {
      let current_mode

      for (const [mode, variants] of entries(modes)) {
        let is_subset = true

        for (const [key, value] of entries(v)) {
          if (!has(variants, key)) {
            is_subset = false
            break
          }
        }

        if (is_subset) {
          current_mode = mode
          break
        }
      }

      for (const [variant, value] of entries(v)) {
        let selector = `[${current_mode}=${variant}]`
        if (variant == entries(v)[0][0]) {
          selector += `, :root`
        }

        append_css(selector, css_variable_definition(k), value)
      }
    } else {
      append_css(':root', css_variable_definition(k), v)
    }
  }

  for (const [selector, pairs] of entries(styles)) {
    for (const [prop, value] of entries(pairs)) {
      append_css(selector, prop, value)
    }
  }

  function css_variable(k) {
    references.add(k)
    return `var(--${CSS.escape(k)})`
  }

  function css_variable_definition(k) {
    references.add(k)
    return `--${CSS.escape(k)}`
  }

  return css
}

export function use_style(theme) {
  useEffect(() => {
    let element = document.getElementById('style')

    if (!element) {
      element = document.createElement('style')
      element.id = 'style'
      document.head.appendChild(element)
    } 

    element.textContent = style(theme)
  }, [theme])
}
