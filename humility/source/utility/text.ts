import * as languages from 'localization/index'

let current_language: keyof typeof languages = 'en'

export function init_language(language: keyof typeof languages) {
  current_language = language
}

export function text(param: string) {
  const language = languages[current_language]
  return language[param] ?? param
}

export function fallback(s) {
  return map(s.split('_'), (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1)
  }).join(' ')
}
