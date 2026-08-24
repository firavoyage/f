export * from 'action/maimai'
export * from 'action/json yaml toml xml'
import { telegram_to_journal as telegram_to_journal_util } from 'action/telegram to journal';

export function telegram_to_journal(telegram_text: string) {
  return telegram_to_journal_util(telegram_text, {rounding: true, targets: each(0, 50, 10)})
}