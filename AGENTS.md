# AGENTS.md
# Guidance for agentic coding in this repo.

## Repo overview
- Framework: Angular 20 (standalone components used in places).
- Styling: SCSS + Tailwind CSS (JIT enabled).
- Linting: ESLint with angular-eslint + typescript-eslint.
- Tests: Karma + Jasmine (browser: Chrome).
- Package manager: npm (package-lock.json present).
- Node: 20.19.4 (see .nvmrc).
- Build output: dist/static.

## Commands
Use npm scripts where possible; ng is also fine.

### Install
- `npm install`

### Dev server
- `npm start`
- `ng serve` (same as npm start)

### Build
- `npm run build` (production by default)
- `ng build --configuration development` (dev build)
- `npm run watch` (build watch)

### Lint
- `npm run lint`
- `npm run lint:fix`

### Tests (Karma/Jasmine)
- `npm test`
- `ng test` (same as npm test)
- `ng test --watch=false` (single run)

### Run a single test file
Angular CLI supports include patterns for Karma.
- `ng test --include src/app/path/to/example.component.spec.ts`
- `ng test --include src/app/path/to/example.component.spec.ts --watch=false`
- `ng test --include src/app/path/**/*.spec.ts --watch=false`

### Useful variations
- `ng test --watch=false --browsers ChromeHeadless` (CI style)
- `ng build --configuration production` (explicit prod)

## Cursor/Copilot rules
- No .cursor/rules, .cursorrules, or .github/copilot-instructions.md found.

## Code style and conventions
Follow existing Angular and ESLint conventions in `eslint.config.js`.

### Formatting
- Indentation: 2 spaces (see .editorconfig).
- Line endings: final newline required.
- Trailing whitespace: trim.
- Quotes in TS: single quotes preferred.
- Keep HTML/SCSS aligned with 2-space indents.

### Imports
- Prefer absolute imports from `src/` when crossing feature areas.
- Keep Angular imports first, then RxJS, then app-local modules.
- Use explicit named imports; avoid default exports in app code.
- Group imports with a blank line only when it improves clarity.

### Naming
- Files: kebab-case (Angular CLI default).
- Components: `PascalCaseComponent` class names.
- Selectors: `app-` prefix, element selectors, kebab-case.
- Directives: `app` prefix, attribute selectors, camelCase.
- Services: `SomethingService`.
- Interfaces: `PascalCase` (see `src/app/shared/interfaces/*`).
- Routes: kebab-case URL segments.

### Angular structure
- Standalone components are used; keep `standalone: true` when editing them.
- Route lazy loading uses `loadComponent` and dynamic imports.
- Use `inject()` in components/services where it is already used.
- Keep component metadata ordered and tidy:
  selector, standalone, imports, templateUrl, styleUrls.

### TypeScript
- Strict mode is enabled (`tsconfig.json`).
- Avoid `any`; prefer `unknown` and narrow types.
- Use `readonly` for immutable data where helpful.
- Prefer `const` over `let` unless reassignment is needed.
- Use type-safe unions for enums (see `status` in data models).
- Avoid non-null assertions unless proven safe.

### RxJS and signals
- Services return typed `Observable<T>`.
- Components may use `toSignal()` for view state.
- Prefer `pipe()` + operators instead of side-effect `subscribe`.
- If you must subscribe, clean up (takeUntil or `DestroyRef`).

### Error handling
- Handle async errors with RxJS operators (`catchError`).
- Return sensible fallbacks or rethrow with context.
- Avoid swallowing errors in services without logging or surfacing.

### Templates and styles
- Templates live next to components (`.component.html`).
- Styles use SCSS (`.component.scss`).
- Tailwind is enabled; use utility classes where appropriate.
- Keep shared styles in `src/styles.scss` when reuse is needed.

### Assets and content
- Static content lives in `src/assets/content/*.ts` and `src/assets`.
- Keep asset paths relative to `src/` (e.g., `assets/...`).

### Testing conventions
- Specs live next to components or features as `*.spec.ts`.
- Keep tests focused and avoid DOM-heavy setups when possible.
- Prefer Angular testing utilities (TestBed) and keep mocks typed.

## Files worth knowing
- `angular.json`: build/test/lint targets and defaults.
- `eslint.config.js`: lint rules and selector conventions.
- `tsconfig.json`: strict TS config.
- `tailwind.config.js`: custom colors, fonts, and screens.
- `karma.conf.js`: Karma setup and coverage output.

## Do and do not
- Do follow existing project structure and naming.
- Do not introduce new tooling without justification.
- Do not add global styles unless they are reusable.
- Do not disable lint rules or strict types without a clear reason.

## Quick workflow
1. `npm install`
2. `npm start`
3. `npm run lint`
4. `ng test --watch=false`
5. `npm run build`

## Notes for agents
- Node modules are already present; do not edit them.
- Keep changes scoped and minimize unrelated refactors.
- If you add new files, align naming with existing patterns.
