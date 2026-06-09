20260609 report research libadwaita design tokens

# repo structure

- **src/** - widget implementation in C, gtkbuilder ui, and scss stylesheets
- **src/stylesheet/** - scss source files that compile to gtk css
- **src/stylesheet/widgets/** - 40+ widget-specific scss files
- **src/stylesheet/_palette.scss** - color palette (10 hues × 5 levels)
- **src/stylesheet/_colors.scss** - semantic color definitions (css custom properties)
- **src/stylesheet/_common.scss** - shared constants, radii, transitions
- **src/stylesheet/_drawing.scss** - scss mixins for focus rings, overshoot, shadows
- **src/adw-easing.c** - 24 easing functions in c code
- **subprojects/** - gtk dependency

# design tokens

## color

### palette (10 hues × 5 levels)

from `_palette.scss`:

```
blue:   #99c1f1, #62a0ea, #3584e4, #1c71d8, #1a5fb4
green:  #8ff0a4, #57e389, #33d17a, #2ec27e, #26a269
yellow: #f9f06b, #f8e45c, #f6d32d, #f5c211, #e5a50a
orange: #ffbe6f, #ffa348, #ff7800, #e66100, #c64600
red:    #f66151, #ed333b, #e01b24, #c01c28, #a51d2d
purple: #dc8add, #c061cb, #9141ac, #813d9c, #613583
brown:  #cdab8f, #b5835a, #986a44, #865e3c, #63452c
light:  #ffffff, #f6f5f4, #deddda, #c0bfbc, #9a9996
dark:   #77767b, #5e5c64, #3d3846, #241f31, #000000
```

### semantic colors

from `_colors.scss`:

```
accent:       #3584e4 (blue_3)
destructive: #e01b24 (red_3)
success:     #2ec27e (green_4)
warning:     #e5a50a (yellow_5)
error:       #e01b24 (red_3)

window_bg:     #fafafb (light) / #222226 (dark)
view_bg:       #ffffff (light) / #1d1d20 (dark)
headerbar_bg:  #ffffff (light) / #2e2e32 (dark)
sidebar_bg:    #ebebed (light) / #2e2e32 (dark)
card_bg:       #ffffff (light) / rgba(255,255,255,8%) (dark)
dialog_bg:    #fafafb (light) / #36363a (dark)
popover_bg:   #ffffff (light) / #36363a (dark)
```

### interaction state colors

from `_colors.scss`:

```
border_opacity:          15% (light) / 25% (dark)
focus_border_opacity:    50% (light) / 80% (dark)
hover:                   color-mix(currentColor, 7%)
active:                  color-mix(currentColor, 16%)
selected:                color-mix(currentColor, 10%)
trough:                  color-mix(currentColor, 15%)
slider:                  color-mix(white 80%, view_bg)
```

### opacity tokens

```
dim-opacity:      55%
disabled-opacity: 50%
```

## typography

from `_labels.scss`:

```
title-1:  800 weight, 181%
title-2:  800 weight, 136%
title-3:  700 weight, 136%
title-4:  700 weight, 118%
heading: 700 weight, body size
body:    400 weight, 140% line-height
caption-heading: 700 weight, 82%
caption:         400 weight, 82%, 140% line-height
monospace: uses monospace-font-family
document: uses document-font-family
```

## spacing

from multiple widget scss files:

```
button min-height:    24px
button min-width:     16px
button padding:       5px 10px
button text padding:  17px 17px
button image padding: 5px 5px

entry min-height:    34px
entry padding:       9px 9px

headerbar min-height: 47px (default) / 37px (compact)
headerbar padding:    6px 7px

windowcontrols button: min-width 24px, padding 5px
toolbar padding:       6px
toolbar border-spacing: 6px
actionbar padding:     7px 6px 6px 6px
searchbar padding:     6px 6px 7px 6px
```

## border radius

from `_common.scss`:

```
button_radius: 9px
card_radius:   12px
menu_radius:   9px
popover_radius: 15px (menu_radius + 6)
dialog_radius: 15px (button_radius + 6)
```

## elevation / shadows

from various widget scss:

```
switch:           0 2px 4px RGB(0 0 6 / 20%)
scale slider:     0 2px 4px RGB(0 0 6 / 20%)
window shadow:    0 0 14px 5px RGB(0 0 0 / 15%)
titlebar shadow:  0 1px ... 0 2px 4px ...
```

## motion / animation

### transition durations (css)

from `_common.scss`:

```
backdrop_transition: 200ms ease-out
button_transition:   200ms ease-out-quad
focus_transition:    200ms ease-out-quad
```

### easing functions (c code)

from `adw-easing.c`:

```
ease (default):   cubic-bezier(0.25, 0.1, 0.25, 1.0)
ease-in:         cubic-bezier(0.42, 0.0, 1.0, 1.0)
ease-out:        cubic-bezier(0.0, 0.0, 0.58, 1.0)
ease-in-out:     cubic-bezier(0.42, 0.0, 0.58, 1.0)

+ 20 more: linear, quad, cubic, quart, quint, sine, expo, circ, elastic, back, bounce
```

### animation durations (c code)

```
view-stack transition: 200ms (default)
view-switcher revealer: 250ms
toast:                   250ms (duration in adw-toast.c)
```

## icons

```
normal-icons:  -gtk-icon-size: 16px
large-icons:   -gtk-icon-size: 32px, weight: 134
```

# references

[^1]: src/stylesheet/_palette.scss
[^2]: src/stylesheet/_colors.scss
[^3]: src/stylesheet/_common.scss
[^4]: src/stylesheet/_drawing.scss
[^5]: src/stylesheet/widgets/_buttons.scss
[^6]: src/stylesheet/widgets/_entries.scss
[^7]: src/stylesheet/widgets/_header-bar.scss
[^8]: src/stylesheet/widgets/_toolbars.scss
[^9]: src/stylesheet/widgets/_labels.scss
[^10]: src/adw-easing.c

# note

libadwaita is a gtk widget library, not a web library. css is compiled from scss. many design tokens exist in c code for:
- default durations (guint transition_duration = 200)
- easing curves (adw-easing.c)
- widget sizing in c (min-height, min-width)

the catch: cosmetic styling in scss, geometry and spacing in c code.