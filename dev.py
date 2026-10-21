"""monco.io — servidor local de desenvolvimento + CMS
Uso:  python dev.py            →  http://localhost:4173/
      http://localhost:4173/editor.html  →  editor de textos

POST /api/save    → grava assets/js/i18n.js (com backup automático)
POST /api/publish → git add + commit + push (mensagem no body JSON)
GET  /api/status  → git status --short
"""
import http.server
import socketserver
import json
import datetime
import subprocess
import pathlib

ROOT = pathlib.Path(__file__).parent.resolve()
I18N = ROOT / "assets" / "js" / "i18n.js"
PORT = 4173


def git(*args):
    p = subprocess.run(["git", *args], cwd=str(ROOT), capture_output=True, text=True)
    return (p.stdout + p.stderr).strip(), p.returncode


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def _json(self, code, obj):
        b = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def do_GET(self):
        if self.path == "/api/status":
            out, _ = git("status", "--short")
            self._json(200, {"ok": True, "status": out})
        else:
            super().do_GET()

    def do_POST(self):
        n = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(n)
        try:
            data = json.loads(body or b"{}")
        except Exception:
            self._json(400, {"ok": False, "err": "JSON inválido"})
            return

        if self.path == "/api/save":
            content = data.get("content", "")
            if "STRINGS" not in content or "en:" not in content:
                self._json(400, {"ok": False, "err": "Conteúdo não parece o i18n.js"})
                return
            ts = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
            backup = ROOT / "assets" / "js" / f".i18n.{ts}.bak"
            backup.write_text(I18N.read_text(encoding="utf-8"), encoding="utf-8")
            I18N.write_text(content, encoding="utf-8")
            self._json(200, {"ok": True, "msg": f"Guardado (backup .i18n.{ts}.bak)"})

        elif self.path == "/api/publish":
            msg = (data.get("message") or "edições do editor de textos")[:200].replace('"', "'")
            out_add, _ = git("add", "-A")
            out_com, code_com = git("commit", "-m", msg)
            out_push, code_push = git("push")
            if code_com != 0 and "nothing to commit" in out_com.lower():
                self._json(200, {"ok": True, "msg": "Nada para publicar (sem alterações)."})
            elif code_push != 0:
                self._json(500, {"ok": False, "msg": "Falha no push", "out": out_add + "\n" + out_com + "\n" + out_push})
            else:
                self._json(200, {"ok": True, "msg": "Publicado no GitHub ✓", "out": out_push[:400]})

        else:
            self._json(404, {"ok": False, "err": "endpoint desconhecido"})

    def log_message(self, *a):
        pass


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    with Server(("127.0.0.1", PORT), Handler) as srv:
        print(f"monco dev   ->  http://localhost:{PORT}/")
        print(f"editor CMS  ->  http://localhost:{PORT}/editor.html")
        srv.serve_forever()
