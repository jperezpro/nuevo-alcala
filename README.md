# Nuevo Alcalá — Bar y Pizzería

Sitio web de **Nuevo Alcalá**, bar y pizzería en el barrio La Aguada, Montevideo.
General Flores 2099.

Stack: **Vite + React 18 + Tailwind CSS + Framer Motion**. Single-page, sin backend.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/ en local
```

## Deploy

Cloudflare Pages, conectado a la rama `main`:

| Ajuste | Valor |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |

`public/_redirects` hace el fallback SPA y `public/_headers` aplica los headers de seguridad.

## Portabilidad de dominio

**El sitio no tiene ninguna URL absoluta a sí mismo.** `vite.config.js` usa `base: './'`,
y las imágenes y la carta se referencian con rutas relativas (`images/...`, `carta.pdf`).

Como consecuencia, el mismo build funciona sin cambios en cualquier dominio. Para publicarlo
en uno nuevo alcanza con **agregar el custom domain en Cloudflare Pages** — no hay que tocar
código ni rebuildear.

Esto es deliberado: si el cliente vuelve a contratar un dominio propio, se apunta a este mismo
repositorio, que es la única fuente de verdad del sitio.

## Origen del código

El sitio fue creado originalmente con **Hostinger Horizons**, que solo entregó el build
compilado (`index.html` + bundle minificado), sin código fuente. Al perderse el acceso a
Horizons, **el fuente de este repositorio fue reconstruido a partir de ese bundle**:
componentes, textos, clases de Tailwind y animaciones se extrajeron del JSX compilado.

Diferencias deliberadas respecto del original:

- Se eliminaron los scripts de telemetría de Horizons (hacían `postMessage` al iframe padre).
- Se eliminó Radix Toast / `useToast`: estaba montado pero nunca se disparaba.
- Las 9 imágenes, que se servían desde un bucket de Hostinger **hoy borrado**, están
  versionadas en `public/images/`.
- La sección "El Corazón de La Aguada" muestra 2 fotos en vez de 3: la tercera era una imagen
  de stock de Unsplash y se quitó en favor de las dos fotos reales del barrio.
- El año del footer se calcula en runtime (antes estaba fijo en 2025).
- Se corrigió el favicon, que apuntaba a un archivo inexistente.

## Datos de contacto

Los textos editables están centralizados en `src/data/`:

- `contacto.js` — dirección, horarios, teléfonos de delivery, link de WhatsApp, mapa
- `especialidades.js` — las 4 cards del menú y las 2 fotos del barrio
- `nav.js` — items de navegación

> El botón de WhatsApp usa el acortador `https://wa.link/1reat7`, heredado del sitio original.
> Conviene reemplazarlo por un link directo `https://wa.me/598XXXXXXXX` para no depender de un
> tercero.

## Carta

`public/carta.pdf` — las 4 cards de especialidades enlazan a este archivo.
Para actualizarla, reemplazar el PDF y volver a desplegar.

## Decisiones que no se re-discuten

- **Dominio-agnóstico a propósito**: `base: './'` en vite.config.js y rutas relativas. No meter URLs absolutas al propio sitio; conectar un dominio nuevo es solo agregar un custom domain en Cloudflare. Verificación: buscar `nuevoalcala.com`, `hostinger` y `storage.googleapis` en `src/`, `public/` e `index.html` tiene que dar cero resultados.
- **URL definitiva: nuevo-alcala.pages.dev.** El 25/08/2026 jvx decidió no usar un subdominio propio (tipo nuevoalcala.jperez.pro). No re-proponerlo.
- Las imágenes de `public/images/` son las únicas copias: el bucket de Hostinger ya las borró.
- `public/googleabe61ebe07f71534.html` verifica la propiedad en Search Console: no borrarlo.
