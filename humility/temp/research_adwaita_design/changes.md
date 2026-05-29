# Changes

## 2026-05-29

- Write readme.md for root and ref directories
- Create todo.md with comprehensive roadmap for component library
- Create spec_create_adwaita_component_library.md with implementation details
- Create component directory structure under `/components`
  - `/buttons` - Button, IconButton
  - `/inputs` - TextInput, TextArea, SearchInput, PasswordInput, Switch, Checkbox
  - `/layout` - Clamp, Spacer
  - `/containers` - Card
- Implement Button component with variants (suggested, destructive, flat, raised) and sizes
- Implement TextInput component with TextArea, SearchInput, PasswordInput variants
- Implement Switch and Checkbox components
- Implement Clamp layout component with responsive padding
- Implement Card component with header, content, footer sections
- Create hooks: useBreakpoint, useMediaQuery, useId
- Fix eslint errors related to null/undefined usage
- Run eslint and TypeScript checks - all pass