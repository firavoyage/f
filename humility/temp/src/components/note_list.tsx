import type { Note } from "../hooks/use_notes"

type Props = {
  notes: Note[]
  selected_id: string | null
  on_select: (id: string) => void
  on_create: () => void
}

export function note_list({ notes, selected_id, on_select, on_create }: Props) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="button button-filled" on_click={on_create}>
          New Note
        </button>
      </div>
      <div className="note-list">
        {notes.length == 0 ? (
          <div style={{ padding: "16px", color: "var(--color-text-secondary)" }}>
            No notes yet
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className={`note-item ${note.id == selected_id ? "selected" : ""}`}
              on_click={() => on_select(note.id)}
            >
              <div className="note-item-title">{note.title || "Untitled"}</div>
              <div className="note-item-preview">
                {note.body.slice(0, 50) || "No content"}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}