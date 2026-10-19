#!/usr/bin/env node
// monco harness — scaffold a new project that follows the "How We Build" method.
// Usage: node harness/new-project.mjs <slug> ["Display Name"] [--out <dir>] [--no-git]
import { cpSync, readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const flag = (n) => { const i = args.indexOf(n); if (i < 0) return null; return args.splice(i, 2)[1] ?? null; };
const noGit = args.includes('--no-git') && args.splice(args.indexOf('--no-git'), 1);
const outRoot = flag('--out') ?? resolve(here, '..', '..');
const [slug, ...rest] = args;

if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node harness/new-project.mjs <slug> ["Display Name"] [--out <dir>] [--no-git]\n  slug: lowercase letters, digits, dashes (also the <slug>.monco.io subdomain)');
  process.exit(1);
}
const vars = {
  SLUG: slug,
  NAME: rest.join(' ') || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
  DATE: new Date().toISOString().slice(0, 10),
  AUTHOR: 'David Ferreira Marques',
};
const dest = join(outRoot, slug);
if (existsSync(dest)) { console.error(`Refusing to overwrite existing ${dest}`); process.exit(1); }

cpSync(join(here, 'template'), dest, { recursive: true });

const TEXT = /\.(md|html|css|js|json|webmanifest|txt)$|\.htaccess$|\.gitignore$/;
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (TEXT.test(f)) {
      writeFileSync(p, readFileSync(p, 'utf8').replace(/\{\{(\w+)\}\}/g, (m, k) => vars[k] ?? m));
    }
  }
})(dest);

if (!noGit) {
  try {
    execSync('git init -q && git add -A && git commit -q -m "Initial scaffold from monco harness"', { cwd: dest, stdio: 'ignore' });
  } catch { console.warn('git init skipped (git unavailable or commit failed)'); }
}
console.log(`\n✔ ${vars.NAME} created at ${dest}\n\nNext (this order is the method):\n  1. Fill docs/VISION.md        ← yours, before any code\n  2. Fill docs/DESIGN.md        ← art direction\n  3. cd ${slug} && claude        ← AI reads CLAUDE.md and starts from your vision\n`);
