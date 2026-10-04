import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { renderPage } from '../src/page.js';
await mkdir('dist/assets', { recursive: true });
await writeFile('dist/index.html', renderPage());
for (const [source, destination] of [
  ['src/styles/main.css', 'main.css'], ['src/main.js', 'main.js'],
  ['public/portrait-000.jpg', 'portrait.jpg'], ['public/favicon.svg', 'favicon.svg']
]) await copyFile(source, `dist/assets/${destination}`);
console.log('Built portfolio into dist/');
