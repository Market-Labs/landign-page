# Contributing Guidelines

## Workflow

- `main`: stable production-ready version.
- `develop`: integration branch.
- `feature/<name>`: focused feature branches.

## Commit Convention

Use Conventional Commits:

```text
feat(landing): add hero section
fix(styles): correct mobile spacing
docs(readme): update setup instructions
chore(project): configure dependencies
```

## Verification

Before opening a pull request, run:

```bash
npm run build
```

## Style Guidelines

- Keep Vue components focused on one landing section.
- Keep section styles in `src/assets/styles/components`.
- Keep user-facing text in `src/locales`.
