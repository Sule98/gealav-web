# GEALAV · Prototipo web, versión 3

Rediseño del sitio del Grupo Empresarial de Alimentos y Aves, orientado a productos, información empresarial y consultas. Conserva los recursos originales y funciona con contenido local, sin necesitar Drupal.

## Iniciar

Node.js 20.9 o superior.

```powershell
npm install
npm run dev
```

Abrir http://localhost:3000. Para presentar la versión de producción:

```powershell
npm run build
npm run start
```

## Tecnología

Next.js 16.3.8 (App Router), React 19.3, TypeScript, Tailwind CSS 4.3.3 y Motion 14.0.0. Dependencias fijadas en package-lock.json. Las versiones se verificaron durante la actualización inicial.

```powershell
npm run lint
npm run typecheck
npm run build
```

## Contenido y funcionamiento

- `/`: banner fotográfico, accesos por categoría, catálogo, actividad, presentación de GEALAV, directorio, preguntas frecuentes y contacto.
- `/productos`: catálogo con filtros y búsqueda; fichas con fotografía, descripción y consulta del producto.
- `/productos?categoria=huevos`, `aves` o `alimentos`: categorías preseleccionadas.
- `/contacto`: formulario; `?producto=huevos`, `aves` o `alimentos` selecciona el tema.
- `/nosotros`: antecedentes, misión, visión y trabajadores.
- `/estructura`: directorio filtrable con las 23 entidades recogidas en el manual de 2023. Su vigencia está pendiente de validación.
- Tres páginas de artículos de muestra y `/privacidad`.
- Buscador de productos, artículos, empresas e información institucional; admite búsquedas sin tildes.
- Navegación móvil, acceso por teclado, cierre de diálogos con Escape, enlace para saltar al contenido y preferencia de movimiento reducido.

El formulario **no envía ni almacena mensajes**. Valida los campos y permite revisar una consulta de demostración. Los artículos son muestras editoriales. No se han inventado teléfonos, precios, existencias ni presentaciones comerciales.

## Referencias e identidad

Se revisaron Avícola La Vida y OnlyFresh para orientar el rediseño. La comparación y las decisiones aplicadas se documentan en `docs/REDISENO.md`.

El Manual de Identidad Visual local de 2023 establece los colores #DB0000, #FCDE95 y #5B0602. Se conservan los identificadores originales y sus proporciones. La tipografía oficial es Frutiger LT Std: no se incluyeron archivos de fuente ni licencia web. El CSS la prioriza si está instalada y utiliza Arial como respaldo.

Las siete fotografías de la versión 3 se generaron con ImageGen como una serie coherente para portada, productos y contenido editorial. Son ilustrativas y no documentan instalaciones ni productos reales de GEALAV. Los recursos anteriores se conservan como referencia. Los originales, las versiones WebP y los prompts exactos están registrados en `docs/IMAGENES-V3.json` y `docs/RECURSOS.md`.

## Animaciones

Motion utiliza un proveedor con LazyMotion y carga diferida de domMax. La portada incorpora entradas por líneas y un desplazamiento suave de la fotografía en escritorio. El símbolo del huevo entra al aparecer; secciones y tarjetas tienen transiciones de entrada, el catálogo anima filtros y disposición, y menú y preguntas frecuentes se despliegan con movimiento. Se respeta `prefers-reduced-motion` con MotionConfig y useReducedMotion; el desplazamiento de la fotografía se desactiva en móvil. Las imágenes WebP suman aproximadamente 978 KB antes de la optimización adicional de Next.js.

## Archivos principales

- `components/site/`: componentes del prototipo.
- `lib/site-content.ts`: productos, textos y artículos.
- `app/globals.css`: diseño y adaptación a pantallas.
- `app/productos/`, `app/contacto/`, `app/[slug]/`: páginas.
- `public/images/`: recursos visuales.

La integración Drupal y los componentes antiguos permanecen como referencia. Storybook antiguo se conserva fuera de las dependencias activas y de la comprobación de tipos por su incompatibilidad con la actualización. No se necesitan variables de entorno para esta propuesta. El workflow existente comprueba lint, compilación y tipos.

## Validación y capturas

La versión 3 pasó compilación de producción, ESLint, TypeScript y comprobación de diferencias. La portada y el catálogo se revisaron en 360, 768, 1024 y 1440 píxeles, sin desbordamiento horizontal; el menú y el formulario se comprobaron también en 390 píxeles. Se verificaron filtros animados, fichas, cierre con Escape, navegación por teclado, consulta preseleccionada, buscador, acordeón, artículo y página 404. El HTML inicial conserva visibles el título y las tres fichas sin depender de JavaScript. La adaptación al movimiento reducido está implementada; no se emuló esa preferencia en el navegador de esta sesión.

Capturas actuales: [portada](docs/previews/v3-portada.png), [escritorio completo](docs/previews/v3-escritorio.png), [móvil completo](docs/previews/v3-movil.png) y [portada móvil](docs/previews/v3-movil-portada.png).

La versión 2 pasó la compilación de producción, ESLint y TypeScript. Se revisaron en el navegador la portada, el catálogo, filtros, estados vacíos, fichas, consulta preseleccionada, búsqueda con y sin resultados, validación del formulario, menú móvil, preguntas frecuentes y directorio. Las capturas de la versión 2 están en `docs/previews/v2-portada.png`, `v2-escritorio.png` y `v2-movil.png`. Los archivos sin prefijo v2 corresponden al diseño anterior.

Antes de publicar: validar textos y estructura empresarial, confirmar contactos y catálogo comercial, incorporar la fuente oficial autorizada, conectar el envío de consultas y reemplazar los artículos de muestra por publicaciones aprobadas.
