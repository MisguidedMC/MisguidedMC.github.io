import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { renderPage } from '../src/page.js';
const cv = await readFile('public/cv.pdf');
const cvVersion = createHash('sha256').update(cv).digest('hex').slice(0, 12);
await mkdir('dist/assets', { recursive: true });
await writeFile('dist/index.html', renderPage(cvVersion));
for (const [source, destination] of [
  ['src/styles/main.css', 'main.css'], ['src/main.js', 'main.js'],
  ['public/portrait-000.jpg', 'portrait.jpg'], ['public/favicon.svg', 'favicon.svg'],
  ['public/cv.pdf', 'cv.pdf']
]) await copyFile(source, `dist/assets/${destination}`);
console.log('Built portfolio into dist/');
