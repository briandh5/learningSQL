# 🧩 SQL en Bloques

> Aprende la sintaxis de SQL de forma puramente visual, interactiva y en tiempo real.

![SQL en Bloques Demo](https://learningsql-zeta.vercel.app/) <!-- Puedes reemplazar por una imagen o GIF del proyecto -->

**SQL en Bloques** es un entorno educativo e interactivo diseñado para que estudiantes y principiantes aprendan a construir consultas de bases de datos mediante un sistema de piezas *drag-and-drop* (arrastrar y soltar). Elimina la fricción de la sintaxis y los errores de terminal, permitiendo visualizar al instante cómo cada cláusula transforma un conjunto de datos.

👉 **Probar la app en vivo:** [learningsql-zeta.vercel.app](https://learningsql-zeta.vercel.app/)

---

## ✨ Características Principales

- 🧩 **Interfaz Gamificada:** Construye consultas de forma táctil e intuitiva arrastrando piezas de código.
- ⚡ **Ejecución en Tiempo Real (Sin Backend):** Un motor SQL ligero escrito en JavaScript valida la sintaxis y filtra los datos en milisegundos directamente en el navegador.
- 🎯 **Pistas y Retroalimentación Didáctica:** Si falta una cláusula o el orden es incorrecto, el sistema ofrece explicaciones sencillas en castellano en lugar de errores crípticos de consola.
- 📱 **Soporte Táctil Completo:** Diseñado con *Touch Events* nativos para una experiencia fluida tanto en computadoras de escritorio como en dispositivos móviles.
- 🎨 **UI/UX Cuidadosa:** Paleta de colores categórica para comandos, cláusulas y operadores, soporte para modo oscuro nativo y tipografía dedicada para código y UI.
- 💾 **Persistencia de Progreso:** Guarda automáticamente tus retos completados usando `localStorage`.

---

## 🛠️ Arquitectura y Tecnologías

El proyecto fue diseñado bajo el principio de **cero dependencias complejas de servidor**, empaquetando la lógica, interfaz y estilos en una experiencia cliente altamente optimizada:

| Capa | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Interfaz** | React | Manejo de estado reactivo para actualizar la tabla de resultados al instante. |
| **Estilos & UI** | Tailwind CSS + CSS Variables | Diseño modular de componentes, muescas de piezas y temas (modo claro/oscuro). |
| **Tipografía** | Google Fonts | *JetBrains Mono* (Código SQL), *Bricolage Grotesque* (Títulos) y *Lexend* (Lectura). |
| **Traducción** | Babel Standalone | Transpilación de JSX directo en el cliente. |
| **Lógica SQL** | JavaScript (ES6+) | Parser personalizado (`parse()`) y motor de ejecución (`execute()`) sobre arreglos en memoria. |
| **APIs Web** | HTML5 Drag & Drop, Touch & Storage | Eventos táctiles, arrastre de piezas, portapapeles y persistencia local. |
| **Despliegue** | Node.js & Vercel | Script de *build* ligero (`build.mjs`) para empaquetar y desplegar en Vercel. |

---

## 🧠 ¿Cómo funciona por dentro?

Cuando interactúas con una pieza, ocurre un flujo continuo de 5 pasos en milisegundos:

[ Evento Usuario ] ➔ [ Estado React ] ➔ [ Motor JS analyze() ] ➔ [ Redibujado UI ] ➔ [ Estilos CSS ]
(Clic / Arrastre)   (setTokens)       (parse + execute)        (Tabla + Pistas)  (Animaciones)


1. **`makeToken()`**: Convierte las piezas seleccionadas en un arreglo de tokens estructurados.
2. **`parse()`**: Analiza la gramática de la consulta. Si detecta un error de secuencia (por ejemplo, falta un `FROM`), genera una sugerencia didáctica.
3. **`execute()`**: Aplica las operaciones de filtrado, selección y ordenamiento sobre el conjunto de datos de prueba (Mock Data).
4. **`explain()`**: Traduce la consulta SQL a una frase explicativa en lenguaje natural.

---

## 🚀 Instalación y Desarrollo Local

Dado que la aplicación está diseñada para no requerir un entorno complejo de compilación, puedes ejecutarla localmente de dos formas:

### Opción 1: Abrir directamente (Sin instalación)
Simplemente clona el repositorio y abre `sql-en-bloques.html` en cualquier navegador web moderno.

### Opción 2: Modo Construcción / Vercel Build
Si deseas probar el script de empaquetado antes de desplegar:

```bash
# 1. Clonar el repositorio
git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)

# 2. Entrar a la carpeta
cd tu-repositorio

# 3. Ejecutar el build local con Node.js
node scripts/build.mjs

# 4. Los archivos empaquetados se generarán en la carpeta /dist
🤝 Contribuciones & Feedback
¡Toda sugerencia o mejora es bienvenida! Si tienes ideas para agregar nuevas cláusulas SQL (GROUP BY, JOIN, etc.), mejorar la accesibilidad o incluir nuevos sets de datos de prueba:

Haz un Fork del proyecto.

Crea una rama para tu feature (git checkout -b feature/NuevaClausula).

Haz Commit de tus cambios (git commit -m 'Añade soporte para JOIN').

Haz Push a la rama (git push origin feature/NuevaClausula).

Abre un Pull Request.
