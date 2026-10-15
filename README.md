# Direct Proportion Quest · Grade 8 Maths

Gamified Wonder → Story → Simulate → Practice → Reflect module (same architecture, UI/UX, viewport and
voice pipeline as the Circumference module). Only the content changed.

## Run
```bash
npm install        # skip if node_modules is already present
npm run dev        # http://localhost:3000
npm run build      # production build -> dist/
```

## Voice / audio (ElevenLabs "Alice", eleven_multilingual_v2)
The key is stored in `.env.local` as `VITE_ELEVENLABS_API_KEY`.

1. Pre-generate every narration line as a static `.mp3` (zero-latency playback):
   ```bash
   npm run audio            # = node scripts/generate_audio.js  (add --force to regenerate all)
   npm run audio:clean      # removes mp3 files no longer referenced by src/audioMap.js
   ```
   Files are saved to `public/assets/audio/<key>.mp3`.
2. Playback order in the app: static mp3 -> live ElevenLabs request (cached) -> browser speech.
   So narration works even before step 1, and is instant after it.

To change a spoken line: edit its `text` in `src/audioMap.js`, keep the on-screen text identical,
then run `npm run audio` again. Titles/headings are never narrated (paragraphs and questions only).

## Where things live
- `src/stages/StoryPhase.jsx`        8 story slides (images: `public/assets/images/slide1-8.svg`)
- `src/stages/SimulatePhase.jsx`     3 stations x 3 activities (activity code: `src/components/SimActivities.jsx`)
- `src/mathData.js`                  10 practice worlds, procedural question generator (100 questions)
- `src/components/ProportionDiagram.jsx`  diagrams shown above each practice question
