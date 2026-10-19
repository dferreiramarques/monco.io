# 🚀 Guia de Deploy — monco.io no Namecheap Shared Hosting

## Pré-requisitos
- Conta Namecheap com um plano de hosting activo (EasyWP, Stellar, ou Business)
- Domínio `monco.io` (ou outro) registado e apontado para o Namecheap nameservers
- FileZilla (gratuito) ou acesso ao cPanel File Manager

---

## PARTE 1 — Preparar o domínio

### 1.1 Nameservers (se o domínio está no Namecheap)
Já está configurado por defeito. Confirma no painel:
- Namecheap Dashboard → Domain List → Manage → Nameservers
- Deve mostrar: `dns1.registrar-servers.com` / `dns2.registrar-servers.com`

### 1.2 Se o domínio está noutro registrar
Adiciona os nameservers do Namecheap hosting no teu registrar actual:
```
dns1.registrar-servers.com
dns2.registrar-servers.com
```
> Propagação DNS: até 24h (normalmente 1-2h)

---

## PARTE 2 — Fazer upload dos ficheiros

### Opção A — Via cPanel File Manager (mais simples)

1. Login em `cpanel.namecheap.com` ou via Namecheap Dashboard → cPanel
2. Abre **File Manager**
3. Navega até `public_html/` (é a pasta raiz do site)
4. Apaga o ficheiro `index.html` default se existir
5. Clica **Upload** (canto superior esquerdo)
6. Faz upload de todos os ficheiros mantendo a estrutura de pastas:

```
public_html/
├── index.html
├── framework.html
├── automation-map.html
├── work.html
├── about.html
├── .htaccess
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── js/i18n.js      ← traduções PT/EN
└── (sem subpastas adicionais)
```

> ⚠️ `.htaccess` é um ficheiro oculto — certifica-te que o "Show Hidden Files" está activado no File Manager

### Opção B — Via FTP com FileZilla (recomendado para uploads grandes)

1. **Cria as credenciais FTP** no cPanel:
   - cPanel → FTP Accounts → Create FTP Account
   - Ou usa o FTP account principal (cPanel → FTP Accounts → Special FTP Accounts)

2. **Configura o FileZilla**:
   - File → Site Manager → New Site
   - Protocol: `FTP - File Transfer Protocol`
   - Host: `monco.io` (ou o IP do servidor — ver cPanel → Server Information)
   - Port: `21`
   - Logon Type: `Normal`
   - User/Password: as credenciais do passo anterior

3. **Upload**:
   - Painel esquerdo (local): navega até à pasta `monco-site/`
   - Painel direito (servidor): navega até `public_html/`
   - Selecciona todos os ficheiros locais → arrasta para o servidor
   - Confirma substituição se necessário

---

## PARTE 3 — HTTPS gratuito com Let's Encrypt

O Namecheap inclui SSL gratuito via Let's Encrypt:

1. cPanel → **SSL/TLS Status**
2. Selecciona o teu domínio (e `www.monco.io`)
3. Clica **Run AutoSSL**
4. Aguarda 2-5 minutos

O `.htaccess` já incluído faz o redirect automático de HTTP → HTTPS.

Para verificar: `https://monco.io` deve funcionar com cadeado verde 🔒

---

## PARTE 4 — Verificar o site

Abre no browser e confirma:

- [ ] `https://monco.io` — home com hero cinemático
- [ ] `https://monco.io/framework.html` — framework 7 dias
- [ ] `https://monco.io/automation-map.html` — 16 melhorias com filtros
- [ ] `https://monco.io/work.html` — portfolio
- [ ] `https://monco.io/about.html` — manifesto
- [ ] Hero animado com tilt elástico (mexer o rato)
- [ ] Toggle PT/EN a funcionar e a persistir entre páginas
- [ ] Animações de scroll a funcionar
- [ ] Cursor personalizado visível (desktop)
- [ ] Filtros do automation map funcionais
- [ ] Links GitHub a abrir em nova tab

---

## PARTE 5 — Email profissional (hello@monco.io)

O Namecheap inclui email gratuito com o hosting:

1. cPanel → **Email Accounts** → Create
2. Email: `hello@monco.io`
3. Password: escolhe uma forte
4. Para aceder via webmail: `webmail.monco.io`
5. Para configurar no Gmail (como alias gratuito):
   - Gmail Settings → Accounts → Add another email address
   - SMTP: `mail.monco.io`, Port: `587`, TLS

---

## PARTE 6 — Optimizações opcionais

### 6.1 Adicionar Google Analytics
Cola antes de `</head>` em todos os HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 6.2 Hero video
- Grava ou licencia um vídeo de 10-20s (workspace nocturno, abstract motion, etc.)
- Comprime com HandBrake para < 8MB
- Upload para `assets/videos/hero.mp4`
- Em `index.html`, remove os comentários `<!--` e `-->` do bloco `<video>`

### 6.3 Form de contacto funcional (sem backend)
Usa **Formspree** (gratuito até 50 submissões/mês):
```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
  <input type="email" name="email" placeholder="O teu email">
  <textarea name="message" placeholder="A tua mensagem"></textarea>
  <button type="submit">Enviar</button>
</form>
```
Alternativa: **Netlify Forms** se migrares para Netlify no futuro.

### 6.4 SEO básico
Adiciona a cada página antes de `</head>`:
```html
<link rel="canonical" href="https://monco.io/PAGINA.html">
<meta name="robots" content="index, follow">
```

---

## PARTE 7 — Alternativa gratuita: Netlify (recomendado a longo prazo)

Se quiseres um deploy mais profissional sem cPanel:

1. Cria conta em [netlify.com](https://netlify.com) (gratuito)
2. Drag & drop da pasta `monco-site/` para o dashboard
3. Em segundos tens um URL tipo `monco-io.netlify.app`
4. Para ligar o domínio próprio: Netlify → Domain Settings → Add custom domain
5. Muda os nameservers do Namecheap para os do Netlify
6. HTTPS automático, CDN global, deploy por drag & drop

> Vantagem: Netlify tem CDN global, deploys atómicos e HTTPS instantâneo. Namecheap shared hosting é mais barato mas menos performante.

---

## Resolução de problemas frequentes

| Problema | Solução |
|---|---|
| Site não abre após upload | Verifica se o `index.html` está directamente em `public_html/` e não numa subpasta |
| CSS/JS não carrega | Verifica paths — devem ser `/assets/css/main.css` com `/` inicial |
| `.htaccess` não funciona | cPanel → Apache Handlers — confirma que `mod_rewrite` está activo |
| WebGL não aparece | Normal em dispositivos antigos — o site tem fallback com SVG layers |
| Cursor não aparece | Normal em touchscreen — o CSS já desactiva `cursor:none` em touch |
| HTTPS não activa | Aguarda 24h após apontar DNS, depois volta a correr AutoSSL |

---

## Checklist final antes de publicar

- [ ] Substitui `hello@monco.io` por um email real nos links `mailto:`
- [ ] Actualiza o copy do portfolio (as descrições são placeholder)
- [ ] Confirma que o Google Analytics está configurado
- [ ] Testa em mobile (Chrome DevTools → responsive mode)
- [ ] Testa em Safari (importante para `-webkit-backdrop-filter`)
- [ ] Verifica PageSpeed Insights: `pagespeed.web.dev`

---

*Guia monco.io v1.0 — gerado em Junho 2026*
