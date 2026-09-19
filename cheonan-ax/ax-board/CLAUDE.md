# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server on port 3053 (port is fixed in the `dev` script, not the default 5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint (config: `.oxlintrc.json`, plugins: `react`, `oxc`)

There is no test suite in this project.

## Architecture

AX 아이디어 보드 (AX Idea Board) — a single-page app for logging ideas about applying AI to specific work tasks. Plain JavaScript (no TypeScript), Vite + React 19, no router, no external state/UI libraries.

- **State lives in `App.jsx`**, which owns the `ideas` array and is the single source of truth. It persists to `localStorage` under the key `ax-board-ideas` via a `useEffect` on every change, and hydrates from `localStorage` on initial `useState`. There is no backend — this is the entire persistence layer.
- **Data shape**: each idea is `{ id, title, task, aiIdea, createdAt }`, created with `crypto.randomUUID()` and an ISO timestamp in `App.jsx`'s `handleAdd`.
- **Component flow is one-directional**: `App` passes `onAdd`/`onDelete`/`onUpdate` callbacks down; `src/components/IdeaForm.jsx` calls `onAdd` with validated, trimmed input; `src/components/IdeaList.jsx` renders `IdeaCard` per idea and forwards `onDelete`/`onUpdate`. `IdeaCard` holds its own local `isEditing`/`draft` UI state for inline editing and calls `onUpdate(id, { title, task, aiIdea })` on save (same trim/non-empty validation as `IdeaForm`). No component other than `App` touches `localStorage` or holds the canonical `ideas` array.
- All user-facing text (labels, buttons, placeholders, empty state) is Korean — keep new UI copy consistent with this.
- Styling is plain CSS files (`src/index.css` for global/theme tokens including dark mode via `prefers-color-scheme`, `src/App.css` for component styling) — no CSS framework or CSS-in-JS.
