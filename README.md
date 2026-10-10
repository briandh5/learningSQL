# SQL en Bloques

Juego visual para aprender la sintaxis de SQL arrastrando piezas de colores.

- **Inventario de piezas**: comandos (azul), cláusulas (morado), operadores (verde), tablas y columnas (gris), funciones y valores.
- **Editor visual**: arrastra o haz clic para añadir piezas; clic en una pieza del editor para quitarla, arrástrala para moverla.
- **Resultados en vivo**: un motor SQL ligero en JavaScript filtra la tabla `jugadores` mientras construyes la consulta y da pistas didácticas cuando falta algo.
- **Retos**: 8 retos con XP y niveles (SELECT, WHERE, ORDER BY, LIMIT, GROUP BY y DELETE). INSERT, UPDATE y DELETE muestran una vista previa antes de ejecutarse.

Todo vive en `sql-en-bloques.html` (React 18 + Tailwind CSS desde CDN). Está escrito como fragmento para publicarse como Artifact de claude.ai.

## Móvil

En pantallas táctiles: toca una pieza para añadirla o quitarla; mantenla pulsada (~0,2 s) y desliza para arrastrarla. Si llevas la pieza al borde de la pantalla, la página se desplaza sola. En móvil el inventario se muestra por pestañas.

## Publicar en Vercel

El repo ya está listo (`vercel.json` + `scripts/build.mjs`, que genera `dist/index.html`; sin dependencias).

1. Entra en https://vercel.com/new e importa `briandh5/learningSQL`.
2. Deja la configuración tal cual (Framework: Other; Vercel lee `vercel.json`) y pulsa **Deploy**.

Para probar en local: `node scripts/build.mjs` y abre `dist/index.html`.
