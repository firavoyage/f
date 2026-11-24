import * as languages from 'localization/index'

const default_language = 'en'
let current_language: keyof typeof languages = default_language

export function init_language(language: keyof typeof languages) {
  current_language = language
}

export function text(text_id: string) {
  const language = languages[current_language]
  return language[text_id] ?? fallback(text_id)
}

export function fallback(s: string) {
  if (has(languages[default_language], s)) {
    console.warn(
      `no ${current_language} localization for text ${s}, fallback to ${default_language}`,
    )
    return languages[default_language][s]
  }

  console.warn(`no localization for text ${s}, fallback to title case`)
  return title_case(s)
}

export function title_case(s: string) {
  return map(s.split('_'), (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1)
  }).join(' ')
}
