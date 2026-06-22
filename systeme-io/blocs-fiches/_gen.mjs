import fs from 'node:fs';
import path from 'node:path';

const here = decodeURIComponent(path.dirname(new URL(import.meta.url).pathname));
const src = fs.readFileSync(path.join(here, '..', '_BLOCS-18-LECONS.html'), 'utf8');

const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=League+Spartan:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">`;

// ============ MODÈLE DE RÉFÉRENCE — texte CENTRÉ, 2 variantes en miroir ============
// A · CRÈME (impairs 1·3·5) : carte claire + pied sombre
// B · NOIR  (pairs  2·4·6) : carte sombre + pied crème
const CSS_CREAM = `<style>
.lrf{--or2:#C4A24A;--or3:#D4B05A;--or:#9A7B2E}
.lrf,.lrf *{box-sizing:border-box}
.lrf-cream{font-family:'League Spartan',system-ui,sans-serif;text-align:center;background:radial-gradient(120% 130% at 50% 0%,#FBF8F2,#F2EDE4 62%);padding:clamp(40px,6vw,84px) clamp(20px,4vw,64px)}
.lrf-cream .lrf-card{max-width:760px;margin:0 auto;background:#fff;border:1px solid #E6DDCB;border-radius:20px;overflow:hidden;box-shadow:0 34px 80px -46px rgba(60,50,30,.42)}
.lrf-cream .lrf-bd{padding:clamp(34px,4.8vw,62px) clamp(28px,4.4vw,60px)}
.lrf-cream .lrf-top{display:flex;justify-content:center;align-items:center;gap:12px;margin:0 0 22px}
.lrf-cream .lrf-n{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:900;font-size:30px;color:var(--or2);line-height:1}
.lrf-cream .lrf-dot{width:4px;height:4px;border-radius:50%;background:var(--or2);opacity:.55}
.lrf-cream .lrf-ey{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--or)}
.lrf-cream h2{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:clamp(28px,4vw,44px);line-height:1.12;letter-spacing:-.015em;color:#15120E;margin:0 auto 22px;max-width:20ch}
.lrf-cream h2 em{font-style:italic;color:var(--or2)}
.lrf-cream .lrf-rl{height:2px;width:56px;margin:0 auto 26px;border:0;border-radius:2px;background:linear-gradient(90deg,transparent,#C4A24A,transparent)}
.lrf-cream p{font-family:'League Spartan',system-ui,sans-serif;font-size:16.5px;line-height:1.8;color:#3D3730;margin:0 auto 1.05em;max-width:54ch}
.lrf-cream p:last-child{margin-bottom:0}
.lrf-cream .lrf-learn{background:#0E0C0A;padding:clamp(26px,3.4vw,40px) clamp(28px,4.4vw,56px)}
.lrf-cream .lrf-learn .lrf-k{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--or3);margin:0 0 18px}
.lrf-cream .lrf-learn ul{list-style:none;margin:0;padding:0;display:grid;gap:13px;justify-items:center}
.lrf-cream .lrf-learn li{font-family:'League Spartan',system-ui,sans-serif;font-size:14.5px;line-height:1.55;color:#E3D9C6;max-width:46ch}
.lrf-cream .lrf-learn li:before{content:"\\2713";color:var(--or2);font-weight:700;margin-right:9px}
</style>`;

const CSS_DARK = `<style>
.lrf{--or2:#C4A24A;--or3:#D4B05A;--or:#9A7B2E;--cr:#F2EDE4}
.lrf,.lrf *{box-sizing:border-box}
.lrf-dark{font-family:'League Spartan',system-ui,sans-serif;text-align:center;background:radial-gradient(120% 130% at 50% 0%,#14110C,#080706 62%);padding:clamp(40px,6vw,84px) clamp(20px,4vw,64px)}
.lrf-dark .lrf-card{max-width:760px;margin:0 auto;background:#17130E;border:1px solid rgba(196,162,74,.26);border-radius:20px;overflow:hidden;box-shadow:0 34px 80px -46px rgba(0,0,0,.85)}
.lrf-dark .lrf-bd{padding:clamp(34px,4.8vw,62px) clamp(28px,4.4vw,60px)}
.lrf-dark .lrf-top{display:flex;justify-content:center;align-items:center;gap:12px;margin:0 0 22px}
.lrf-dark .lrf-n{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:900;font-size:30px;color:var(--or2);line-height:1}
.lrf-dark .lrf-dot{width:4px;height:4px;border-radius:50%;background:var(--or2);opacity:.55}
.lrf-dark .lrf-ey{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--or2)}
.lrf-dark h2{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:clamp(28px,4vw,44px);line-height:1.12;letter-spacing:-.015em;color:#F4EEE3;margin:0 auto 22px;max-width:20ch}
.lrf-dark h2 em{font-style:italic;color:var(--or2)}
.lrf-dark .lrf-rl{height:2px;width:56px;margin:0 auto 26px;border:0;border-radius:2px;background:linear-gradient(90deg,transparent,#C4A24A,transparent)}
.lrf-dark p{font-family:'League Spartan',system-ui,sans-serif;font-size:16.5px;line-height:1.8;color:#D9D0C2;margin:0 auto 1.05em;max-width:54ch}
.lrf-dark p:last-child{margin-bottom:0}
.lrf-dark .lrf-learn{background:#F4EEE3;padding:clamp(26px,3.4vw,40px) clamp(28px,4.4vw,56px)}
.lrf-dark .lrf-learn .lrf-k{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--or);margin:0 0 18px}
.lrf-dark .lrf-learn ul{list-style:none;margin:0;padding:0;display:grid;gap:13px;justify-items:center}
.lrf-dark .lrf-learn li{font-family:'League Spartan',system-ui,sans-serif;font-size:14.5px;line-height:1.55;color:#3D3730;max-width:46ch}
.lrf-dark .lrf-learn li:before{content:"\\2713";color:var(--or2);font-weight:700;margin-right:9px}
</style>`;

const block = (theme, num, ey, h2, paras, k, lis) => {
  const css = theme === 'cream' ? CSS_CREAM : CSS_DARK;
  const cls = theme === 'cream' ? 'lrf-cream' : 'lrf-dark';
  const psHtml = paras.map(p => `      <p>${p}</p>`).join('\n');
  const lisHtml = lis.map(li => `        <li>${li}</li>`).join('\n');
  return `${FONTS}
${css}
<div class="lrf ${cls}">
  <div class="lrf-card">
    <div class="lrf-bd">
      <div class="lrf-top"><span class="lrf-n">${num}</span><span class="lrf-dot"></span><span class="lrf-ey">${ey}</span></div>
      <h2>${h2}</h2>
      <hr class="lrf-rl">
${psHtml}
    </div>
    <div class="lrf-learn">
      <p class="lrf-k">${k}</p>
      <ul>
${lisHtml}
      </ul>
    </div>
  </div>
</div>`;
};

const parts = src.split('<div class="lbl">').slice(1);
const slugCourse = (label) => {
  if (/^Introduction/i.test(label)) return 'intro';
  const m = label.match(/Cours\s*(\d)/i);
  return m ? `c${m[1]}` : 'x';
};
const manifest = [];

for (const chunk of parts) {
  const label = chunk.slice(0, chunk.indexOf('</div>')).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const theme = /class="la"/.test(chunk) ? 'cream' : 'dark';
  const src2 = chunk.slice(chunk.search(/<div class="l[ab]"/));
  const num = (src2.match(/class="n">([\s\S]*?)<\/span>/) || [])[1].trim();
  const ey  = (src2.match(/class="ey">([\s\S]*?)<\/span>/) || [])[1].trim();
  const h2  = (src2.match(/<h2>([\s\S]*?)<\/h2>/) || [])[1].trim();
  const paras = [...src2.matchAll(/<p>([\s\S]*?)<\/p>/g)].map(m => m[1].trim());
  const k   = (src2.match(/class="k">([\s\S]*?)<\/p>/) || [])[1].trim();
  const lis = [...src2.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(m => m[1].trim());

  const mNum = label.match(/M\s*(\d)/i)[1];
  const slug = `${slugCourse(label)}-m${mNum}`;
  fs.writeFileSync(path.join(here, `${slug}.html`), block(theme, num, ey, h2, paras, k, lis));
  manifest.push({ slug, label, theme, num, title: h2.replace(/<[^>]+>/g, '') });
}

fs.writeFileSync(path.join(here, '_manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Generated ${manifest.length} blocks (CENTRÉ):`);
for (const m of manifest) console.log(`  ${m.slug.padEnd(8)} ${m.theme.padEnd(5)} ${m.label}`);
