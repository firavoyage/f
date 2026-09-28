rg --files -g 'design/**/*.yaml' -g '!**/legacy/**' | b 'script/convert design tokens.ts'
# rg --files -g 'design/**/utilitarian.yaml' | b 'script/convert design tokens.ts'
# rg --files -g 'design/**/*.yaml' | b 'script/convert design tokens.ts'