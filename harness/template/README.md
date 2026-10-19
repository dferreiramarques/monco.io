# {{NAME}}

Created {{DATE}} by {{AUTHOR}}, with AI under human direction — see [docs/AI-STATEMENT.md](docs/AI-STATEMENT.md).

## Run locally

```bash
python -m http.server 8800
```

## Project docs (the method, in order)

| File | Owner | Purpose |
|---|---|---|
| `docs/VISION.md` | David | The idea: problem, audience, differentiator, out of scope |
| `docs/DESIGN.md` | David | Art direction: palette, type, tone, interaction |
| `docs/ROADMAP.md` | David | What is NOW / NEXT / LATER / NOT |
| `docs/DECISIONS.md` | David (AI drafts) | Every decision, incl. rejections and reverts |
| `docs/ITERATIONS.md` | AI drafts, David signs | Intent → build → verdict, per cycle |
| `docs/CHECKLIST.md` | David | Validation before release |
| `docs/AI-STATEMENT.md` | David | Public declaration of method for this project |
| `CLAUDE.md` | — | Contract the AI follows in this repo |

## Deploy

Static upload to `public_html/` (or subdomain folder) on Namecheap; `.htaccess` forces HTTPS. Only after `docs/CHECKLIST.md` is complete.
