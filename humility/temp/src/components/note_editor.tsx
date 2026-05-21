import { use_state, use_effect } from "react"
import type { Note } from "../hooks/use_notes"

type Props = {
  note: Note | null
  on_update: (id: string, title: string, body: string) => void
  on_delete: (id: string) => void
}

export function note_editor({ note, on_update, on_delete }: Props) {
  const [title, set_title] = use_state("")
  const [body, set_body] = use_state("")

  use_effect(() => {
    if (note) {
      set_title(note.title)
      set_body(note.body)
    } else {
      set_title("")
      set_body("")
    }
  }, [note?.id])

  if (!note) {
    return (
      <div className="empty-state">
        <p>Select a note or create a new one</p>
      </div>
    )
  }

  const handle_save = () => {
    on_update(note.id, title, body)
  }

  const handle_delete = () => {
    if (confirm("Delete this note?")) {
      on_delete(note.id)
    }
  }

  return (
    <div className="card">
      <div className="input-group">
        <label className="label">Title</label>
        <input
          className="input"
          type="text"
          value={title}
          on_input={(e) => set_title(e.target.value)}
          placeholder="Note title"
        />
      </div>
      <div className="input-group">
        <label className="label">Content</label>
        <textarea
          className="input textarea"
          value={body}
          on_input={(e) => set_body(e.target.value)}
          placeholder="Write your note..."
        />
      </div>
      <div className="button-group">
        <button className="button button-filled" on_click={handle_save}>
          Save
        </button>
        <button className="button button-danger" on_click={handle_delete}>
          Delete
        </button>
      </div>
    </div>
  )
}