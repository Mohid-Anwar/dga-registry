## What does this PR do?

<!-- Describe the change and why it's needed, not just what changed. -->

## Related issue

<!-- Closes #... -->

## Type of change

- [ ] New registry component
- [ ] Fix to an existing component
- [ ] Docs/demo update only
- [ ] Build/tooling change
- [ ] Other

## Checklist

- [ ] `pnpm format:check` passes (or I ran `pnpm format`)
- [ ] `pnpm lint` passes
- [ ] `pnpm build` passes (regenerates `public/r/*.json` and builds the site)
- [ ] If I added/renamed/removed a file under `registry/dga/`, I updated the matching `_registry.ts` **and** hand-added the equivalent entry to the root `registry.json`
- [ ] If I added a new component, it has an `app/<name>/page.mdx` + `demos.tsx` docs page
- [ ] I manually verified the change in the dev server (`pnpm dev`), including RTL if direction-relevant
- [ ] Registry code under `registry/dga/` still has no imports from `app/` or `components/`, and no Next-specific runtime APIs (see [CLAUDE.md](../CLAUDE.md))

## Screenshots / recordings

<!-- For visual changes, before/after screenshots or a short recording. -->
