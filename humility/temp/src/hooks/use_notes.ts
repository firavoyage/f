import { useState, useEffect } from "react"

export type Note = {
  id: string
  title: string
  body: string
  updated_at: number
}

const STORAGE_KEY = "notes"

function generate_id() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export function use_notes() {
  const [notes, set_notes] = useState<Note[]>(() => {
    if (typeof window == "undefined") return []
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  const [selected_id, set_selected_id] = useState<string | null>(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  const create_note = () => {
    const new_note: Note = {
      id: generate_id(),
      title: "",
      body: "",
      updated_at: Date.now(),
    }
    set_notes((prev) => [new_note, ...prev])
    set_selected_id(new_note.id)
  }

  const update_note = (id: string, title: string, body: string) => {
    set_notes((prev) =>
      prev.map((n) =>
        n.id == id ? { ...n, title, body, updated_at: Date.now() } : n
      )
    )
  }

  const delete_note = (id: string) => {
    set_notes((prev) => prev.filter((n) => n.id != id))
    if (selected_id == id) {
      set_selected_id(null)
    }
  }

  const selected_note = notes.find((n) => n.id == selected_id) ?? null

  return {
    notes,
    selected_id,
    selected_note,
    set_selected_id,
    create_note,
    update_note,
    delete_note,
  }
}