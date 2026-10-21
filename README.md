# monco.io

Site do laboratório de experimentação monco.io — homepage hub, 4 laboratórios
(`/spark/`, `/nimble/`, `/wave/`, `/ludens/`), método (`metodo.html`) e
página de pessoas/CV (`equipa/`). Bilingue PT/EN via `assets/js/i18n.js`.

## Desenvolvimento local

```bash
python dev.py        # servidor + CMS em http://localhost:4173/
```

(O clássico `python -m http.server 4173` também serve, mas sem API de gravação.)

## Editor de textos (CMS simples)

Documentação completa: **`docs/cms.html`** (abre em `http://localhost:4173/docs/cms.html`).

Em resumo:

- `http://localhost:4173/editor.html` — edita todos os textos do site (PT/EN), ~745 campos agrupados por secção, com preview do site ao lado.
- **Guardar** — grava `assets/js/i18n.js` (backup automático `.i18n.*.bak`).
- **Publicar** — `git add -A` + `commit` + `push` reais para este repositório; GitHub Pages actualiza `monco.io` ±1 min.
- No site publicado o editor é só-leitura (a API de gravação só existe no servidor local).

## API do `dev.py`

| Endpoint | Método | Função |
|---|---|---|
| `/api/save` | POST | grava `assets/js/i18n.js` (com backup) |
| `/api/publish` | POST | `git add -A` + commit + push |
| `/api/status` | GET | `git status --short` |

## Estrutura

```
index.html           homepage (hub dos laboratórios)
metodo.html          o Ciclo do Laboratório
equipa/              pessoas / CV (David)
spark|nimble|wave|ludens/index.html   os 4 laboratórios
cv/pt.html · cv/en.html               CV imprimível
editor.html          CMS local (edição de textos)
dev.py               servidor dev + API save/publish
assets/js/i18n.js    TODOS os textos do site (PT/EN)
assets/css/main.css  estilos base (partilham todos)
assets/css/labs.css  theming por laboratório (body.lab + --lab)
```
