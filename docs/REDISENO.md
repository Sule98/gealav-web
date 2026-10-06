# Rediseño GEALAV · Referencias y decisiones

Revisión: 5 de octubre de 2026. Los patrones siguientes se observaron en las páginas proporcionadas por el usuario; no se presentan como un estudio general de tendencias de 2026.

| Referencia | Estructura observada | Aplicación en GEALAV |
|---|---|---|
| [Avícola La Vida](https://avicolalavida.com/) | Navegación por productos, oferta de pollo con nombres concretos, presentación empresarial y contacto directo | Categorías visibles, nombres de producto comprensibles, fotografía avícola y páginas propias de empresa y contacto |
| [OnlyFresh](https://onlyfresh.com/es-es) | Categorías, fotografía de producto, fichas de catálogo, bloques informativos y preguntas/respuestas | Accesos fotográficos por categoría, tarjetas consistentes, filtros, detalle y recorrido hacia una consulta |

La propuesta adopta esos patrones de navegación y contenido. No reutiliza fotografías, logotipos ni textos de las referencias. No incorpora precios, carrito, reseñas de clientes ni certificaciones sin información real de GEALAV.

## Cambio respecto a la primera versión

Se sustituyó la composición editorial abstracta por un banner de producto a todo el ancho. Los títulos de las fichas ahora son «Huevos de consumo», «Carne de aves» y «Alimentos balanceados». La navegación principal lleva a páginas completas y una segunda fila da acceso a cada categoría.

El catálogo y el contacto comparten componentes con la portada. Una ficha lleva a `/contacto?producto=...`, donde el asunto queda seleccionado. Las preguntas frecuentes explican cómo explorar productos, consultar y buscar empresas. El formulario muestra su condición de demostración y no realiza envíos.

## Identidad y datos

Se mantienen los colores del manual y los identificadores originales. Las fotos de producto son ilustraciones generadas para el prototipo. La imagen de la instalación procede del proyecto original. El directorio conserva el aviso de fuente 2023 y validación pendiente; los artículos se identifican como muestras.

## Comprobaciones

Compilación de producción, lint y TypeScript correctos. Revisión en el navegador de categorías, filtros, búsquedas, estados vacíos, fichas, cierre con Escape, consulta preseleccionada, validación, menú móvil, directorio y preguntas frecuentes. Capturas en `docs/previews/v2-*.png`.

## Sello de identidad en la portada

Se tomó como referencia la superposición del sello de [Fifty6](https://www.fiftysix.ca/) entre el banner y el fondo blanco, junto con la captura aportada por el usuario. La portada utiliza únicamente el símbolo original de GEALAV (`public/logo_h.png`), que ya incluye transparencia. No se reconstruyó ni se recoloreó el identificador.

El símbolo queda centrado en el límite inferior del banner. Se reservó espacio para su mitad inferior antes de las categorías; en móvil se reduce su tamaño y se amplía el banner para evitar solapamientos con los textos. Es un elemento decorativo, excluido de la lectura de los lectores de pantalla.

Comprobación del sello: compilación de producción y lint correctos. Revisado en 360, 390, 768, 1024 y 1440 píxeles; las categorías conservan un margen libre de 29–31 píxeles debajo del símbolo. Capturas del ajuste: `docs/previews/sello-escritorio.png` y `docs/previews/sello-movil.png`.

## Versión 3 · Fotografía y Motion

Se generaron siete fotografías nuevas con ImageGen integrado: paisaje avícola de portada, huevos, carne de aves, piensos, entorno avícola, cultivo de maíz y trabajo de laboratorio. Comparten luz cálida y tonos naturales. Se conservaron los identificadores originales de GEALAV y el huevo superpuesto en la portada. Todas las fotografías se identifican como ilustrativas.

Los prompts completos y los archivos finales están en [IMAGENES-V3.json](IMAGENES-V3.json). Cada registro contiene el original guardado en el proyecto y su versión WebP. No se utilizó la CLI de generación ni una clave API del usuario. Los recursos anteriores permanecen disponibles como referencia.

Las animaciones se implementaron con [Motion para React](https://motion.dev/docs/react): entradas por desplazamiento, sello, transición de filtros y tarjetas, menú móvil, acordeón y progreso de lectura. [LazyMotion](https://motion.dev/docs/react-lazy-motion) carga las funciones de animación por separado; [useReducedMotion](https://motion.dev/docs/react-use-reduced-motion) y MotionConfig adaptan los efectos a la preferencia del usuario. El movimiento de la fotografía de portada se limita a escritorio. No hay animaciones decorativas infinitas ni vídeo de fondo.

Las fotografías muestran composiciones generadas para presentar la propuesta visual; no constituyen documentación de instalaciones, productos, prácticas de manejo o laboratorios reales de la entidad.

Validación V3: compilación de producción, ESLint y TypeScript correctos. Portada y catálogo sin desbordamientos en 360, 768, 1024 y 1440 píxeles. En 390 píxeles se comprobaron menú, Escape y retorno del foco, ficha, consulta preseleccionada y validación del formulario. También se revisaron el buscador global, el acordeón por teclado, la fotografía de un artículo y la navegación desde la página 404. El HTML del servidor conserva visibles el título y las tres fichas; no se emuló la preferencia de movimiento reducido en el navegador. Las capturas finales están en `docs/previews/v3-portada.png`, `v3-escritorio.png`, `v3-movil.png` y `v3-movil-portada.png`.

## Versión 4 · Sistema visual y movimiento para la presentación comercial

Se mantiene el contenido, la identidad cromática y las fotografías de la versión 3. Cambia la capa visual: tipografía Figtree (cargada con `next/font`, con Frutiger y Arial como respaldo), titulares de gran formato, botones y filtros en píldora, tarjetas con esquinas amplias y portada enmarcada.

Movimiento añadido: cabecera fija que se compacta al desplazarse; indicador que sigue al cursor en la navegación; título de portada revelado por líneas, fotografía con acercamiento inicial y contenido que se desvanece al bajar; sello flotante; marquesina de áreas de actividad; parallax en la fotografía de presentación; cifras con conteo (1964, líneas de producción y entidades del directorio, calculadas desde `lib/site-content.ts`); anillos animados en el bloque de la red empresarial; entrada de página en cada navegación (`app/template.tsx`) y transición de apertura y cierre en los diálogos.

En móvil: menú a pantalla completa con entrada escalonada, filtros y artículos en carrusel táctil con ajuste, ficha de producto como hoja inferior y cifras apiladas.

A diferencia de la versión 3, ahora existen animaciones continuas (marquesina, sello, anillos e indicadores). Todas se desactivan con `prefers-reduced-motion`, y la marquesina se detiene al pasar el cursor.

Comprobaciones V4: TypeScript y ESLint correctos. Revisión en el servidor de desarrollo a 1440, 1024 y 375 píxeles: portada, catálogo, cifras, red empresarial, actividad, pie, menú móvil, ficha de producto, «Quiénes somos» y contacto con producto preseleccionado; sin desbordamiento horizontal en 375 píxeles. No se ejecutó la compilación de producción ni se actualizaron las capturas de `docs/previews`.

## Versión 5 · Dirección de arte por bloques de color

Referencia aportada por el usuario: [Grupo Avícola Rujamar](https://www.rujamar.com/). De ella se toma el planteamiento, no los recursos: secciones a color pleno, tipografía de cartel, acentos manuscritos, cifras de gran tamaño y banners de campaña. Se combinó con patrones actuales de composición: titulares sobredimensionados, mosaico tipo bento y relato por desplazamiento con secciones fijadas.

La portada se reestructuró por completo; el contenido y las fotografías son los de la versión 3.

- Tipografía: Bricolage Grotesque para titulares, Caveat para acentos manuscritos y Figtree para el texto.
- Navegación: cápsula flotante que se retira al bajar y vuelve al subir; desaparecen la barra superior y la fila de categorías. En móvil, menú granate a pantalla completa que se abre en círculo desde el botón.
- Portada: bloque amarillo con titular «Alimentos y aves para Cuba.», fotografía incrustada en el titular y sello giratorio con el símbolo original.
- Fotografía de portada: entra como tarjeta y crece hasta ocupar la pantalla mientras la sección queda fijada.
- Manifiesto: bloque granate cuyas palabras se encienden con el desplazamiento.
- Productos: tres tarjetas a color que se apilan al desplazarse; cada una enlaza a la consulta con el producto preseleccionado. El apilado se desactiva en pantallas de menos de 720 píxeles de alto.
- Cintas cruzadas con las áreas de actividad, mosaico de cifras y lista editorial de artículos con vista previa que sigue al cursor (fotografía en cada fila en pantallas táctiles).
- Contacto en panel amarillo y pie con el nombre a todo el ancho.

El catálogo con filtros y la ficha de producto se conservan en `/productos`. Las páginas interiores heredan tipografía, navegación y pie.

Comprobaciones V5: TypeScript y ESLint correctos. Revisión en el servidor de desarrollo a 731 y 375 píxeles de ancho: portada, fotografía fijada, manifiesto, tarjetas apiladas, cintas, mosaico, lista de actividad, contacto, pie, menú móvil y catálogo; sin desbordamiento horizontal en 375 píxeles. No se revisó en un navegador a 1440 píxeles reales, no se ejecutó la compilación de producción ni se actualizaron las capturas.
