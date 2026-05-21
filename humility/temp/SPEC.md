# Notes App - Dual Design System Specification

## Project Overview

- **Type**: React Notes App
- **Core Functionality**: Create, view, edit, delete notes with theme switcher between GNOME Adwaita and Material Design 3
- **Persistence**: localStorage

## UI Structure

- **Header**: App title ("Notes") + theme switcher dropdown (right-aligned)
- **Main**: Two-column on desktop (sidebar list + detail view), stacked on mobile
- **Sidebar**: List of notes with "New Note" button at top
- **Detail**: Selected note editor (title input, body textarea, save/delete buttons)

## Design Systems

### Adwaita (GNOME)
- Background: `#1e1e1e`
- Surface: `#2d2d2d`
- Primary: `#3584e4`
- Text: `#ffffff` / `#9a9996`

### Material Design 3
- Background: `#1c1b1f`
- Surface: `#2b2930`
- Primary: `#d0bcff`
- Text: `#e6e1e5` / `#cac4d0`

## Features

- Theme switcher (persists to localStorage)
- Create new note
- Edit note title + body
- Delete note
- Responsive: sidebar + detail side-by-side on desktop, stacked on mobile

## Technical

- React 18 + ParcelJS
- Semantic CSS with CSS custom properties
- File structure:
  - `src/app.tsx`
  - `src/components/header.tsx`
  - `src/components/note_list.tsx`
  - `src/components/note_editor.tsx`
  - `src/components/theme_switcher.tsx`
  - `src/styles/global.css`
  - `src/styles/semantic.css`
  - `src/hooks/use_theme.ts`
  - `src/hooks/use_notes.ts`