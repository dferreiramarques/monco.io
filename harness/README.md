# monco harness

Starts a new project already wired to the "How We Build" method (see `/metodo.html`): David directs, AI executes, every decision is on record.

```bash
node harness/new-project.mjs my-app "My App"      # creates ../my-app (sibling of monco-site), git-initialised
node harness/new-project.mjs my-app --out D:/Projects
```

Zero dependencies (Node 18+). Not part of the site deploy: don't upload `harness/`.

## What you get

```
my-app/
├── CLAUDE.md                 AI contract: roles, the loop, tech defaults, honesty rules
├── .claude/commands/         /iterate · /decide · /release
├── docs/
│   ├── VISION.md             David fills first — before any code
│   ├── DESIGN.md             art direction (tokens mirror main.css)
│   ├── ROADMAP.md            NOW / NEXT / LATER / NOT — AI builds only NOW
│   ├── DECISIONS.md          incl. rejected proposals and reverts
│   ├── ITERATIONS.md         intent → build → verdict (the authorship trail)
│   ├── CHECKLIST.md          only David ticks it
│   └── AI-STATEMENT.md       public per-project declaration of method
├── index.html, assets/       vanilla PWA shell, PT/EN i18n, dark tokens, footer attribution
├── manifest.webmanifest, sw.js
└── .htaccess                 HTTPS, cache, blocks /docs and agent files
```

## Workflow

1. `new-project` → fill `VISION.md`, `DESIGN.md`, first `NOW` item in `ROADMAP.md`.
2. `cd my-app && claude` → `/iterate <what you want>` per cycle; `/decide` for choices.
3. `/release` walks `CHECKLIST.md`; you approve; then deploy to `<slug>.monco.io`.

## Changing the defaults

Edit `template/` — it is the single source. Placeholders: `{{NAME}} {{SLUG}} {{DATE}} {{AUTHOR}}`.
