**Project Overview**

- **Type:** React + Vite single-page app (client-only). Entry is `src/main.jsx` which renders `App` into `#root` in `index.html`.
- **Styling:** Tailwind v4 configured via `tailwind.config.js` and `postcss.config.js` using the `@tailwindcss/postcss` plugin.
- **Build system:** Vite with `@vitejs/plugin-react` (see `vite.config.js`).

**Primary Files & Folders**

- `src/main.jsx`: app entry; mount point is `document.getElementById('root')`.
- `src/App.jsx`: top-level UI component (example Tailwind usage).
- `src/components/`, `src/layouts/`, `src/pages/`: feature/component organization; prefer adding new UI pieces here.
- `index.html`: includes the root element and is referenced in Tailwind `content` array.
- `package.json`: dev scripts (`dev`, `build`, `preview`, `lint`).

**How to run & verify**

- Start dev server with `npm run dev` (Vite + HMR).
- Build with `npm run build` and preview with `npm run preview`.
- Lint with `npm run lint` (ESLint config in `eslint.config.js`).

**Project-specific conventions**

- Keep files in `src/` and follow existing folder layout: `components`, `layouts`, `pages`.
- Use functional React components with JSX. The project uses `StrictMode` in `src/main.jsx`.
- Tailwind classes are used directly in JSX — update `tailwind.config.js` `content` when adding non-jsx markup (e.g., new HTML files).
- ESLint: project extends `@eslint/js` + `react-hooks` + `react-refresh` rules. Note the custom rule: `no-unused-vars` ignores names matching `^[A-Z_]` (allows React components and some globals).

**Integration & external deps**

- This is a front-end-only repo; no server code is present. External integrations (APIs) should be added via fetch/axios from components/pages.
- PostCSS is configured to use the scoped plugin name `@tailwindcss/postcss` (see `postcss.config.js`) — keep this naming when changing PostCSS plugins.

**Patterns & examples agents should follow**

- When changing the root component, update `src/main.jsx` and ensure `index.html` still provides `#root`.
- For UI work, add files to `src/components/` and import from `src/pages/` or `src/layouts/` as appropriate.
- When updating CSS/Tailwind tokens, update `tailwind.config.js` and re-run `npm run dev` to confirm HMR reflects changes.

**Debugging tips**

- Use `npm run dev` — Vite console shows compilation errors and HMR updates. Browser devtools + React DevTools are recommended.
- For build issues, run `npm run build` locally to reproduce and inspect `dist` output.

**What not to change without confirmation**

- Do not switch the project to TypeScript automatically — devDependencies include `@types/*` but source files are `.js`/`.jsx`.
- Avoid replacing the PostCSS plugin key unless you verify compatibility with the installed package name `@tailwindcss/postcss`.

**Quick references**

- Entry: `src/main.jsx`
- Top UI: `src/App.jsx`
- Configs: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`

If anything here is unclear or you want additional examples (routing, API integration, or a component scaffold), tell me which area to expand.
