// Test de plomberie : vérifie que les fonctions serveur se déploient sur Cloudflare.
// Si https://www.lautrerecit.com/api/ping renvoie {"ok":true,...} → les fonctions marchent.
export function onRequest(context) {
  return new Response(
    JSON.stringify({ ok: true, msg: "pong", env: context.env.SYSTEME_API_KEY ? "SYSTEME_API_KEY vue" : "SYSTEME_API_KEY absente" }),
    { headers: { "content-type": "application/json; charset=utf-8" } }
  );
}
