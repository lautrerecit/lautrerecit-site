// Partage d'une réplique : story Instagram, message Instagram, WhatsApp, SMS, téléchargement.
// Instagram n'offre aucun lien web pour préremplir un message ou une story : on passe par la
// feuille de partage du téléphone (Web Share API avec l'image) ; sur ordinateur, on télécharge
// l'image et on copie le texte.

function blob(cv) { return new Promise((ok) => cv.toBlob(ok, 'image/png')); }

function telecharger(cv, nom) {
  const a = document.createElement('a');
  a.href = cv.toDataURL('image/png'); a.download = nom;
  document.body.appendChild(a); a.click(); a.remove();
}

export function copier(txt) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt).catch(() => repli(txt));
  repli(txt); return Promise.resolve();
}
function repli(txt) {
  const z = document.createElement('textarea'); z.value = txt; z.setAttribute('readonly', ''); z.style.position = 'absolute'; z.style.left = '-9999px';
  document.body.appendChild(z); z.select(); try { document.execCommand('copy'); } catch (e) {} z.remove();
}

async function feuille(cv, nom, texte) {
  const f = new File([await blob(cv)], nom, { type: 'image/png' });
  const d = texte ? { files: [f], text: texte } : { files: [f] };
  if (navigator.canShare && navigator.canShare(d)) {
    try { await navigator.share(d); return 'partage'; } catch (e) { return e.name === 'AbortError' ? 'annule' : 'erreur'; }
  }
  return null;
}

// Renvoie un message court à afficher, ou '' si rien à dire.
export async function partager(canal, { texte, url, cv, nom }) {
  const message = texte + '\n\n' + url;
  if (canal === 'whatsapp') { window.open('https://wa.me/?text=' + encodeURIComponent(message), '_blank', 'noopener'); return ''; }
  if (canal === 'sms') { location.href = 'sms:?&body=' + encodeURIComponent(message); return ''; }
  if (canal === 'telecharger') { telecharger(cv, nom); return 'Image téléchargée'; }
  if (canal === 'story') {
    const r = await feuille(cv, nom);
    if (r) return r === 'partage' ? '' : '';
    telecharger(cv, nom); return 'Image téléchargée : ajoutez-la en story depuis votre téléphone';
  }
  if (canal === 'instagram') {
    const r = await feuille(cv, nom, message);
    if (r) return '';
    await copier(message); window.open('https://www.instagram.com/direct/inbox/', '_blank', 'noopener');
    return 'Texte copié : collez-le dans la conversation Instagram';
  }
  return '';
}

export const CANAUX = [
  { id: 'story', nom: 'Story Instagram' },
  { id: 'instagram', nom: 'Instagram' },
  { id: 'whatsapp', nom: 'WhatsApp' },
  { id: 'sms', nom: 'SMS' },
  { id: 'telecharger', nom: 'Télécharger l’image' },
];
