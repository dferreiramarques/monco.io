/* PT (default) / EN. Every user-facing string goes through here.
   data-i18n="key" → textContent · data-i18n-html="key" → innerHTML · data-i18n-attr="attr:key" */
(function () {
  'use strict';
  const STORE = '{{SLUG}}-lang';
  const STRINGS = {
    pt: {
      'app.title': '{{NAME}}',
      'app.lead': 'TODO — escrito a partir de docs/VISION.md.',
      'foot.credit': 'Dirigido por David Ferreira Marques · feito com IA sob direcção humana',
      'foot.method': 'método ↗',
    },
    en: {
      'app.title': '{{NAME}}',
      'app.lead': 'TODO — written from docs/VISION.md.',
      'foot.credit': 'Directed by David Ferreira Marques · built with AI under human direction',
      'foot.method': 'method ↗',
    },
  };

  let lang = 'pt';
  try { lang = localStorage.getItem(STORE) || 'pt'; } catch (_) {}

  const t = (k) => (STRINGS[lang] && STRINGS[lang][k]) || STRINGS.pt[k] || k;

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const [attr, key] = el.dataset.i18nAttr.split(':');
      el.setAttribute(attr, t(key));
    });
    document.querySelectorAll('.lang-btn').forEach((b) => b.classList.toggle('is-active', b.dataset.lang === lang));
    document.documentElement.lang = lang;
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem(STORE, l); } catch (_) {}
    apply();
  }

  function init() {
    document.querySelectorAll('.lang-btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
    apply();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  window.i18n = { t, setLang, lang: () => lang };
})();
