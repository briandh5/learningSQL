// Genera dist/index.html (documento completo) a partir del fragmento del Artifact.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const fragment = readFileSync(new URL('../sql-en-bloques.html', import.meta.url), 'utf8');
const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Aprende SQL arrastrando piezas de colores: la consulta se ejecuta en vivo sobre una tabla de jugadores.">
<meta name="theme-color" content="#2F6BEA">
<style>
  :root { color-scheme: light; padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }
  html, body { min-height: 100%; }
  body { margin: 0; font: 14px/1.5 system-ui, sans-serif; }
  img { max-width: 100%; }
  [hidden] { display: none !important; }
</style>
</head>
<body>
${fragment}
</body>
</html>
`;
mkdirSync(new URL('../dist/', import.meta.url), { recursive: true });
writeFileSync(new URL('../dist/index.html', import.meta.url), html);
console.log('dist/index.html listo');
