/* Deletes any .mp3 in public/assets/audio that is no longer referenced by src/audioMap.js */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const AUDIO_DIR = path.join(ROOT, 'public', 'assets', 'audio');

const { AUDIO_MAP } = await import(pathToFileURL(path.join(ROOT, 'src', 'audioMap.js')).href);
const valid = new Set(Object.values(AUDIO_MAP).map(s => path.basename(s.file || '')));

if (!fs.existsSync(AUDIO_DIR)) {
  console.log('No audio folder yet — nothing to clean.');
} else {
  let removed = 0;
  for (const f of fs.readdirSync(AUDIO_DIR)) {
    if (f.endsWith('.mp3') && !valid.has(f)) {
      fs.unlinkSync(path.join(AUDIO_DIR, f));
      removed++;
      console.log(`removed ${f}`);
    }
  }
  console.log(`Clean complete. Removed ${removed} orphaned file(s).`);
}
