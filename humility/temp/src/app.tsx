import { use_theme } from "./hooks/use_theme"
import { use_notes } from "./hooks/use_notes"
import { header } from "./components/header"
import { note_list } from "./components/note_list"
import { note_editor } from "./components/note_editor"

export function App() {
  const { theme, set_theme } = use_theme()
  const {
    notes,
    selected_id,
    selected_note,
    set_selected_id,
    create_note,
    update_note,
    delete_note,
  } = use_notes()

  return (
    <>
      {header({ theme, on_theme_change: set_theme })}
      <main className="main">
        {note_list({
          notes,
          selected_id,
          on_select: set_selected_id,
          on_create: create_note,
        })}
        <div className="content">
          {note_editor({
            note: selected_note,
            on_update: update_note,
            on_delete: delete_note,
          })}
        </div>
      </main>
    </>
  )
}