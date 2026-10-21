@echo off
REM ============================================================
REM  monco.io - sincroniza a copia local com o GitHub
REM  Usar antes de comecar a editar (noutro PC ou depois de
REM  publicar algo por fora). Depois disto, abre-se start.bat.
REM ============================================================
cd /d "%~dp0"

echo [monco] a sincronizar com o GitHub...
git pull --rebase
if errorlevel 1 (
  echo [monco] FALHOU. Causas tipicas:
  echo [monco]  - alteracoes locais por publicar: guarda no editor e clica Publicar
  echo [monco]  - conflito com o remoto: edita o ficheiro indicado acima e faz commit
  pause
  exit /b 1
)

echo [monco] copia local ao dia com o remoto.
