# Portfolio Project — Claude Rules

## Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Language**: TypeScript (strict mode)
- **Styling**: Scoped CSS inside `.svelte` files; global styles in `src/app.css`
- **Build tool**: Vite

## Project Structure

```
src/
  app.css              # Global reset and base styles only
  components/          # Reusable UI components
  routes/              # SvelteKit file-based routing
    +layout.svelte     # Root layout (Navbar + Footer)
    +page.svelte       # Homepage
    projects/
      +page.svelte     # Projects listing page
```

## Component Rules

- All reusable components live in `src/components/`, never inside `src/routes/`.
- Component filenames use PascalCase (e.g., `ProjectCard.svelte`).
- Props must be typed with a TypeScript `interface` and destructured via `$props()`.
- Use Svelte 5 runes syntax (`$props`, `$state`, `$derived`) — do not use the legacy Options API.

## Styling Rules

- Styles are scoped inside each `.svelte` file using `<style>` blocks.
- `src/app.css` is for global resets and base typography only — no component styles.
- Do not use any CSS framework or utility library (no Tailwind, Bootstrap, etc.).
- Use CSS custom properties or plain values; keep styles simple and readable.
- Responsive layouts use CSS Grid with `auto-fill` / `minmax`.

## TypeScript Rules

- Strict mode is enabled — no implicit `any`.
- Always type component props explicitly.
- Prefer `interface` over `type` for object shapes.

## Routing Rules

- Pages are defined by `+page.svelte` files inside `src/routes/`.
- Navigation uses plain `<a href="...">` tags (SvelteKit intercepts them automatically).
- The root layout (`+layout.svelte`) is the only place Navbar and Footer are rendered.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run check     # Type-check with svelte-check
npm run lint      # Prettier + ESLint
npm run format    # Auto-format with Prettier
```

## Conventions

- Keep pages thin — data and logic belong in components or `+page.ts` load functions.
- Placeholder project data lives inline in the page component as a typed array until a real data source exists.
- No external dependencies should be added without a clear reason.
