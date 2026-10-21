@echo off
REM ============================================================
REM  monco.io - arranca o servidor local (dev.py) e abre o CMS
REM  Duplo clique neste ficheiro para editar os textos do site.
REM ============================================================
cd /d "%~dp0"

REM se o servidor ja esta a correr nesta porta, nao arranca outro
netstat -ano | findstr /R /C:":4173.*LISTENING" >nul 2>&1
if %errorlevel%==0 (
  echo [monco] servidor ja em execucao -- so a abrir o editor...
) else (
  echo [monco] a arrancar o servidor local: python dev.py
  start "monco dev" /min python dev.py
  REM dar tempo ao servidor para ficar a escuta
  ping -n 3 127.0.0.1 >nul
)

REM abrir o editor no browser predefinido
start "" "http://localhost:4173/editor.html"

echo [monco] editor em http://localhost:4173/editor.html
echo [monco] fechar este terminal nao para o servidor.
echo [monco] para parar: fechar a janela "monco dev" ou taskkill /IM python.exe
