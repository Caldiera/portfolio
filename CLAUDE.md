# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Language**: TypeScript (strict mode)
- **Styling**: Scoped SCSS inside `.svelte` files; global styles in `src/app.scss`
- **Build tool**: Vite

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run check     # Type-check with svelte-check
npm run lint      # Prettier + ESLint
npm run format    # Auto-format with Prettier
```

## Project Structure

```
src/
  app.html             # HTML entry point (Google Fonts import lives here)
  app.scss             # Global reset and base typography only
  components/          # Reusable UI components
  styles/
    _variables.scss            # SCSS variables (colors, spacing, radii, transitions)
    _variables.module.scss     # :export block — exposes SCSS vars to TypeScript
    _variables.module.scss.d.ts  # Type declarations for the module export
  routes/
    +layout.svelte     # Root layout — only place Navbar and Footer are rendered
    +page.svelte       # Homepage (hero, about, featured projects)
    projects/
      +page.svelte     # Projects listing page
```

## Component Rules

- All reusable components live in `src/components/`, never inside `src/routes/`.
- Component filenames use PascalCase.
- Props must be typed with a TypeScript `interface` and destructured via `$props()`.
- Use Svelte 5 runes syntax (`$props`, `$state`, `$derived`) — do not use the legacy Options API.

## Styling Rules

- Styles are scoped inside each `.svelte` file using `<style lang="scss">` blocks.
- `src/app.scss` is for global resets and base typography only — no component styles.
- Do not use any CSS framework or utility library.
- Responsive layouts use CSS Grid with `auto-fill` / `minmax`.
- SCSS variables are imported in component style blocks with `@use '../styles/variables' as *;`.

## SCSS Variables in TypeScript

`_variables.module.scss` uses a `:export` block to expose SCSS variables as a JS object. Import it in components when you need design tokens in script logic:

```ts
import colors from '../styles/_variables.module.scss';
// colors.frostedLight, colors.frostedMedium, colors.frostedDark, etc.
```

When adding a new variable to `_variables.scss` that needs to be accessible in TypeScript, also add it to the `:export` block in `_variables.module.scss` and its declaration in `_variables.module.scss.d.ts`.

## TypeScript Rules

- Strict mode is enabled — no implicit `any`.
- Always type component props explicitly.
- Prefer `interface` over `type` for object shapes.

## Routing & Layout

- Pages are defined by `+page.svelte` files inside `src/routes/`.
- Navigation uses plain `<a href="...">` tags (SvelteKit intercepts them automatically).
- The root layout wraps all pages in `<main>` between `<Navbar>` and `<Footer>`.

## Conventions

- Keep pages thin — data and logic belong in components or `+page.ts` load functions.
- Placeholder project data lives inline in the page component as a typed array until a real data source exists.
- No external dependencies should be added without a clear reason.
