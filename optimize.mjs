import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIR = 'public/lovable-uploads';
const files = await readdir(DIR);

let savedTotal = 0;
const conversions = []; // {oldName, newName}

for (const f of files) {
  const ext = extname(f).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
  const p = join(DIR, f);
  const before = (await stat(p)).size;
  if (before < 30 * 1024) continue; // skip tiny files (logos already small)

  const meta = await sharp(p).metadata();
  const isLogo = /logo/i.test(f);
  const maxW = isLogo ? 600 : 1600;
  const newName = basename(f, ext) + '.webp';
  const newPath = join(DIR, newName);

  let pipe = sharp(p).rotate();
  if (meta.width && meta.width > maxW) {
    pipe = pipe.resize({ width: maxW, withoutEnlargement: true });
  }
  await pipe.webp({ quality: 80, effort: 5 }).toFile(newPath);

  const after = (await stat(newPath)).size;
  if (after >= before) {
    await unlink(newPath);
    continue;
  }
  if (newName !== f) {
    await unlink(p);
    conversions.push({ old: f, new: newName });
  }
  savedTotal += before - after;
  console.log(`${f} ${(before/1024).toFixed(0)}K -> ${newName} ${(after/1024).toFixed(0)}K`);
}

// Optimize root public images
for (const f of ['fond-site-idee.png', 'og-image.png', 'logo-idee.png']) {
  const p = join('public', f);
  try {
    const before = (await stat(p)).size;
    const ext = extname(f);
    const newName = basename(f, ext) + '.webp';
    const newPath = join('public', newName);
    const isLogo = /logo/i.test(f);
    const maxW = isLogo ? 600 : 1920;
    await sharp(p).rotate().resize({ width: maxW, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(newPath);
    const after = (await stat(newPath)).size;
    if (after >= before) { await unlink(newPath); continue; }
    await unlink(p);
    conversions.push({ old: f, new: newName });
    savedTotal += before - after;
    console.log(`${f} ${(before/1024).toFixed(0)}K -> ${newName} ${(after/1024).toFixed(0)}K`);
  } catch (e) {}
}

console.log(`\nTotal saved: ${(savedTotal/1024/1024).toFixed(2)} MB`);
console.log(`Conversions: ${conversions.length}`);
import { writeFile } from 'fs/promises';
await writeFile('/tmp/conversions.json', JSON.stringify(conversions, null, 2));
