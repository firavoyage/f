const glossary = {
  aspect: {
    prop: [['ratio', 'aspectRatio']],
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
        'breakAfter',
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
        'breakBefore',
      ],
    ],
  },
  'break-inside': {
    prop: [[['auto', 'avoid', 'avoid-page', 'avoid-column'], 'breakInside']],
  },
  'box-decoration': {
    prop: [[['slice', 'clone'], 'boxDecorationBreak']],
  },
  box: {
    prop: [[['border', 'content'], 'boxSizing']],
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
      [['contain', 'cover', 'fill', 'none', 'scale-down'], 'objectFit'],
      ['position', 'objectPosition'],
    ],
  },
  overflow: {
    prop: [
      [
        ['auto', 'hidden', 'clip', 'visible', 'scroll'],
        ['overflow', 'overflowX', 'overflowY'],
      ],
    ],
  },
  overscroll: {
    prop: [
      [
        ['auto', 'contain', 'none'],
        ['overscrollBehavior', 'overscrollBehaviorX', 'overscrollBehaviorY'],
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
    prop: [['length', ['insetTop', 'insetRight', 'insetBottom', 'insetLeft']]],
  },
  'inset-x': {
    prop: [['length', ['left', 'right']]],
  },
  'inset-y': {
    prop: [['length', ['top', 'bottom']]],
  },
  'inset-s': {
    prop: [['length', 'insetInlineStart']],
  },
  'inset-e': {
    prop: [['length', 'insetInlineEnd']],
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
    prop: [['length', 'insetInlineStart']],
  },
  end: {
    prop: [['length', 'insetInlineEnd']],
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
    prop: [['number', 'zIndex']],
  },
  basis: {
    prop: [
      ['length', 'flexBasis'],
      ['percentage', 'flexBasis'],
      [['auto', 'full', 'min', 'max', 'fit'], 'flexBasis'],
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
    prop: [['number', 'flexGrow']],
    style: ['flexGrow', '1'],
  },
  shrink: {
    prop: [['number', 'flexShrink']],
    style: ['flexShrink', '1'],
  },
  order: {
    prop: [
      ['number', 'order'],
      [['first', 'last', 'none'], 'order'],
    ],
  },
  'grid-cols': {
    prop: [
      ['number', 'gridTemplateColumns'],
      ['grid-template', 'gridTemplateColumns'],
    ],
  },
  'col-span': {
    prop: [
      ['number', 'gridColumn'],
      [['full'], 'gridColumn'],
    ],
  },
  'col-start': {
    prop: [
      ['number', 'gridColumnStart'],
      [['auto'], 'gridColumnStart'],
    ],
  },
  'col-end': {
    prop: [
      ['number', 'gridColumnEnd'],
      [['auto'], 'gridColumnEnd'],
    ],
  },
  'grid-rows': {
    prop: [
      ['number', 'gridTemplateRows'],
      ['grid-template', 'gridTemplateRows'],
    ],
  },
  'row-span': {
    prop: [
      ['number', 'gridRow'],
      [['full'], 'gridRow'],
    ],
  },
  'row-start': {
    prop: [
      ['number', 'gridRowStart'],
      [['auto'], 'gridRowStart'],
    ],
  },
  'row-end': {
    prop: [
      ['number', 'gridRowEnd'],
      [['auto'], 'gridRowEnd'],
    ],
  },
  'grid-flow': {
    prop: [[['row', 'col', 'dense', 'row-dense', 'col-dense'], 'gridAutoFlow']],
  },
  'auto-cols': {
    prop: [[['auto', 'min', 'max', 'fr'], 'gridAutoColumns']],
  },
  'auto-rows': {
    prop: [[['auto', 'min', 'max', 'fr'], 'gridAutoRows']],
  },
  gap: {
    prop: [['length', ['gap', 'columnGap', 'rowGap']]],
  },
  'gap-x': {
    prop: [['length', 'columnGap']],
  },
  'gap-y': {
    prop: [['length', 'rowGap']],
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
        'justifyContent',
      ],
      [['start', 'end', 'center', 'stretch'], 'justifyItems'],
      [['auto', 'start', 'end', 'center', 'stretch'], 'justifySelf'],
    ],
  },
  items: {
    prop: [[['start', 'end', 'center', 'baseline', 'stretch'], 'alignItems']],
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
        'alignContent',
      ],
      ['content', 'content'],
    ],
  },
  self: {
    prop: [
      [['auto', 'start', 'end', 'center', 'stretch', 'baseline'], 'alignSelf'],
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
        'placeContent',
      ],
    ],
  },
  'place-items': {
    prop: [[['start', 'end', 'center', 'baseline', 'stretch'], 'placeItems']],
  },
  'place-self': {
    prop: [[['auto', 'start', 'end', 'center', 'stretch'], 'placeSelf']],
  },
  p: {
    prop: [
      [
        'length',
        ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
      ],
    ],
  },
  px: {
    prop: [['length', ['paddingLeft', 'paddingRight']]],
  },
  py: {
    prop: [['length', ['paddingTop', 'paddingBottom']]],
  },
  ps: {
    prop: [['length', 'paddingInlineStart']],
  },
  pe: {
    prop: [['length', 'paddingInlineEnd']],
  },
  pt: {
    prop: [['length', 'paddingTop']],
  },
  pr: {
    prop: [['length', 'paddingRight']],
  },
  pb: {
    prop: [['length', 'paddingBottom']],
  },
  pl: {
    prop: [['length', 'paddingLeft']],
  },
  m: {
    prop: [
      ['length', ['marginTop', 'marginRight', 'marginBottom', 'marginLeft']],
    ],
  },
  mx: {
    prop: [['length', ['marginLeft', 'marginRight']]],
  },
  my: {
    prop: [['length', ['marginTop', 'marginBottom']]],
  },
  ms: {
    prop: [['length', 'marginInlineStart']],
  },
  me: {
    prop: [['length', 'marginInlineEnd']],
  },
  mt: {
    prop: [['length', 'marginTop']],
  },
  mr: {
    prop: [['length', 'marginRight']],
  },
  mb: {
    prop: [['length', 'marginBottom']],
  },
  ml: {
    prop: [['length', 'marginLeft']],
  },
  'space-x': {
    prop: [['length', 'marginInlineStart']],
  },
  'space-y': {
    prop: [['length', 'marginTop']],
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
      ['length', 'minWidth'],
      [['0', 'full', 'min', 'max', 'fit'], 'minWidth'],
    ],
  },
  'min-h': {
    prop: [
      ['length', 'minHeight'],
      [['0', 'full', 'screen', 'min', 'max', 'fit'], 'minHeight'],
    ],
  },
  'max-w': {
    prop: [
      ['length', 'maxWidth'],
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
        'maxWidth',
      ],
    ],
  },
  'max-h': {
    prop: [
      ['length', 'maxHeight'],
      [['none', 'full', 'screen', 'min', 'max', 'fit'], 'maxHeight'],
    ],
  },
  font: {
    prop: [
      ['font-family', 'fontFamily'],
      ['font-weight', 'fontWeight'],
    ],
  },
  text: {
    prop: [
      ['length', 'fontSize'],
      ['color', 'color'],
      [['left', 'center', 'right', 'justify', 'start', 'end'], 'textAlign'],
      [['ellipsis', 'clip'], 'textOverflow'],
      [['wrap', 'nowrap', 'balance', 'pretty'], 'textWrap'],
    ],
  },
  tracking: {
    prop: [['length', 'letterSpacing']],
  },
  leading: {
    prop: [['length', 'lineHeight']],
  },
  'line-clamp': {
    prop: [
      ['number', 'lineClamp'],
      [['none'], 'lineClamp'],
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
        'listStyleType',
      ],
      [['inside', 'outside'], 'listStylePosition'],
      ['image', 'listStyleImage'],
    ],
  },
  placeholder: {
    prop: [['color', 'color']],
  },
  decoration: {
    prop: [
      ['color', 'textDecorationColor'],
      [['solid', 'double', 'dotted', 'dashed', 'wavy'], 'textDecorationStyle'],
      ['length', 'textDecorationThickness'],
    ],
  },
  'underline-offset': {
    prop: [['length', 'textUnderlineOffset']],
  },
  indent: {
    prop: [['length', 'textIndent']],
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
        'verticalAlign',
      ],
    ],
  },
  whitespace: {
    prop: [
      [
        ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'],
        'whiteSpace',
      ],
    ],
  },
  break: {
    prop: [
      [['normal', 'words', 'all', 'keep'], 'overflowWrap'],
      [['normal', 'words', 'all'], 'wordBreak'],
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
    style: ['fontStyle', 'italic'],
  },
  'not-italic': {
    style: ['fontStyle', 'normal'],
  },
  uppercase: {
    style: ['textTransform', 'uppercase'],
  },
  lowercase: {
    style: ['textTransform', 'lowercase'],
  },
  capitalize: {
    style: ['textTransform', 'capitalize'],
  },
  'normal-case': {
    style: ['textTransform', 'none'],
  },
  underline: {
    style: ['textDecorationLine', 'underline'],
  },
  overline: {
    style: ['textDecorationLine', 'overline'],
  },
  'line-through': {
    style: ['textDecorationLine', 'line-through'],
  },
  'no-underline': {
    style: ['textDecorationLine', 'none'],
  },
  bg: {
    prop: [
      ['color', 'backgroundColor'],
      ['image', 'backgroundImage'],
      ['position', 'backgroundPosition'],
      [['auto', 'cover', 'contain'], 'backgroundSize'],
      [
        [
          'repeat',
          'no-repeat',
          'repeat-x',
          'repeat-y',
          'repeat-round',
          'repeat-space',
        ],
        'backgroundRepeat',
      ],
      [['fixed', 'local', 'scroll'], 'backgroundAttachment'],
      [['border', 'padding', 'content', 'text'], 'backgroundClip'],
      [['border', 'padding', 'content'], 'backgroundOrigin'],
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
        'length',
        [
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderBottomRightRadius',
          'borderBottomLeftRadius',
        ],
      ],
      [
        ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
        [
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderBottomRightRadius',
          'borderBottomLeftRadius',
        ],
      ],
    ],
  },
  'rounded-t': {
    prop: [['length', ['borderTopLeftRadius', 'borderTopRightRadius']]],
  },
  'rounded-r': {
    prop: [['length', ['borderTopRightRadius', 'borderBottomRightRadius']]],
  },
  'rounded-b': {
    prop: [['length', ['borderBottomRightRadius', 'borderBottomLeftRadius']]],
  },
  'rounded-l': {
    prop: [['length', ['borderTopLeftRadius', 'borderBottomLeftRadius']]],
  },
  'rounded-s': {
    prop: [['length', ['borderStartStartRadius', 'borderEndStartRadius']]],
  },
  'rounded-e': {
    prop: [['length', ['borderStartEndRadius', 'borderEndEndRadius']]],
  },
  border: {
    prop: [
      [
        'length',
        [
          'borderTopWidth',
          'borderRightWidth',
          'borderBottomWidth',
          'borderLeftWidth',
        ],
      ],
      [
        'color',
        [
          'borderTopColor',
          'borderRightColor',
          'borderBottomColor',
          'borderLeftColor',
        ],
      ],
      [
        ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none'],
        'borderStyle',
      ],
    ],
  },
  'border-x': {
    prop: [
      ['length', ['borderLeftWidth', 'borderRightWidth']],
      ['color', ['borderLeftColor', 'borderRightColor']],
    ],
  },
  'border-y': {
    prop: [
      ['length', ['borderTopWidth', 'borderBottomWidth']],
      ['color', ['borderTopColor', 'borderBottomColor']],
    ],
  },
  'border-s': {
    prop: [
      ['length', 'borderInlineStartWidth'],
      ['color', 'borderInlineStartColor'],
    ],
  },
  'border-e': {
    prop: [
      ['length', 'borderInlineEndWidth'],
      ['color', 'borderInlineEndColor'],
    ],
  },
  'border-t': {
    prop: [
      ['length', 'borderTopWidth'],
      ['color', 'borderTopColor'],
    ],
  },
  'border-r': {
    prop: [
      ['length', 'borderRightWidth'],
      ['color', 'borderRightColor'],
    ],
  },
  'border-b': {
    prop: [
      ['length', 'borderBottomWidth'],
      ['color', 'borderBottomColor'],
    ],
  },
  'border-l': {
    prop: [
      ['length', 'borderLeftWidth'],
      ['color', 'borderLeftColor'],
    ],
  },
  'divide-x': {
    prop: [
      ['length', 'borderInlineStartWidth'],
      ['color', 'borderColor'],
    ],
  },
  'divide-y': {
    prop: [
      ['length', 'borderTopWidth'],
      ['color', 'borderColor'],
    ],
  },
  outline: {
    prop: [
      ['length', 'outlineWidth'],
      ['color', 'outlineColor'],
      [
        ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double'],
        'outlineStyle',
      ],
      ['length', 'outlineOffset'],
    ],
  },
  ring: {
    prop: [
      ['length', '--tw-ring-width'],
      ['color', '--tw-ring-color'],
    ],
  },
  'ring-offset': {
    prop: [
      ['length', '--tw-ring-offset-width'],
      ['color', '--tw-ring-offset-color'],
    ],
  },
  shadow: {
    prop: [
      ['shadow', 'boxShadow'],
      ['color', 'boxShadowColor'],
    ],
  },
  'text-shadow': {
    prop: [
      ['shadow', 'textShadow'],
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
        'mixBlendMode',
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
        'backgroundBlendMode',
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
    prop: [['percentage', 'backdropFilter']],
  },
  'backdrop-contrast': {
    prop: [['percentage', 'backdropFilter']],
  },
  'backdrop-grayscale': {
    prop: [['percentage', 'backdropFilter']],
  },
  'backdrop-hue-rotate': {
    prop: [['angle', 'backdropFilter']],
  },
  'backdrop-invert': {
    prop: [['percentage', 'backdropFilter']],
  },
  'backdrop-opacity': {
    prop: [['percentage', 'backdropFilter']],
  },
  'backdrop-saturate': {
    prop: [['percentage', 'backdropFilter']],
  },
  'backdrop-sepia': {
    prop: [['percentage', 'backdropFilter']],
  },
  transform: {
    prop: [[['gpu', 'cpu', 'none'], 'transform']],
  },
  'transform-gpu': {
    style: ['transform', 'translateZ(0)'],
  },
  'transform-cpu': {
    style: ['transform', 'none'],
  },
  origin: {
    prop: [['position', 'transformOrigin']],
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
    prop: [['position', 'perspectiveOrigin']],
  },
  rotate: {
    prop: [['angle', 'rotate']],
  },
  scale: {
    prop: [
      ['number', ['scale', 'scaleX', 'scaleY']],
      ['percentage', ['scale', 'scaleX', 'scaleY']],
    ],
  },
  skew: {
    prop: [['angle', ['skewX', 'skewY']]],
  },
  translate: {
    prop: [
      ['length', ['translate', 'translateX', 'translateY']],
      ['percentage', ['translate', 'translateX', 'translateY']],
    ],
  },
  transition: {
    prop: [
      [
        ['none', 'all', 'colors', 'opacity', 'shadow', 'transform', 'all'],
        'transitionProperty',
      ],
    ],
  },
  duration: {
    prop: [['time', 'transitionDuration']],
  },
  ease: {
    prop: [['easing', 'transitionTimingFunction']],
  },
  delay: {
    prop: [['time', 'transitionDelay']],
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
      ['length', 'strokeWidth'],
    ],
  },
  accent: {
    prop: [['color', 'accentColor']],
  },
  appearance: {
    prop: [[['none', 'auto'], 'appearance']],
  },
  caret: {
    prop: [['color', 'caretColor']],
  },
  scheme: {
    prop: [
      [
        ['normal', 'light', 'dark', 'light-dark', 'only-light', 'only-dark'],
        'colorScheme',
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
    prop: [[['fixed', 'content'], 'fieldSizing']],
  },
  'pointer-events': {
    prop: [[['auto', 'none'], 'pointerEvents']],
  },
  resize: {
    prop: [[['none', 'x', 'y'], 'resize']],
  },
  scroll: {
    prop: [
      [['auto', 'smooth'], 'scrollBehavior'],
      [['auto', 'contain', 'none'], 'overscrollBehavior'],
    ],
  },
  'scroll-m': {
    prop: [['length', 'scrollMargin']],
  },
  'scroll-mx': {
    prop: [['length', ['scrollMarginLeft', 'scrollMarginRight']]],
  },
  'scroll-my': {
    prop: [['length', ['scrollMarginTop', 'scrollMarginBottom']]],
  },
  'scroll-mt': {
    prop: [['length', 'scrollMarginTop']],
  },
  'scroll-mr': {
    prop: [['length', 'scrollMarginRight']],
  },
  'scroll-mb': {
    prop: [['length', 'scrollMarginBottom']],
  },
  'scroll-ml': {
    prop: [['length', 'scrollMarginLeft']],
  },
  'scroll-p': {
    prop: [['length', 'scrollPadding']],
  },
  'scroll-px': {
    prop: [['length', ['scrollPaddingLeft', 'scrollPaddingRight']]],
  },
  'scroll-py': {
    prop: [['length', ['scrollPaddingTop', 'scrollPaddingBottom']]],
  },
  'scroll-pt': {
    prop: [['length', 'scrollPaddingTop']],
  },
  'scroll-pr': {
    prop: [['length', 'scrollPaddingRight']],
  },
  'scroll-pb': {
    prop: [['length', 'scrollPaddingBottom']],
  },
  'scroll-pl': {
    prop: [['length', 'scrollPaddingLeft']],
  },
  snap: {
    prop: [
      [['none', 'x', 'y', 'both'], 'scrollSnapType'],
      [['mandatory', 'proximity'], 'scrollSnapType'],
      [['start', 'end', 'center', 'align-none'], 'scrollSnapAlign'],
      [['normal', 'always'], 'scrollSnapStop'],
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
        'touchAction',
      ],
    ],
  },
  select: {
    prop: [[['none', 'text', 'all', 'auto'], 'userSelect']],
  },
  'will-change': {
    prop: [[['auto', 'scroll', 'contents', 'transform'], 'willChange']],
  },
  'sr-only': {
    style: ['position', 'absolute'],
  },
  'not-sr-only': {
    style: ['position', 'static'],
  },
  'forced-color-adjust': {
    prop: [[['auto', 'none'], 'forcedColorAdjust']],
  },
}


