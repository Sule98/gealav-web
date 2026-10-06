# Recursos visuales del prototipo

## Material original

- public/banner.jpg: fotografía avícola disponible en el proyecto.
- public/logo.png y public/logo_h.png: identificadores originales.
- Manual de Identidad GEALAV  Versión Final 13-4.pdf: fuente local para colores, composición, misión, visión, antecedentes y directorio de referencia. Documento fechado en 2023; el directorio no implica verificación de vigencia en 2026.

## Archivos utilizados

- public/images/avicultura.webp: fotografía original reducida a 1800 píxeles de ancho, sin modificar su contenido.
- public/images/logo.webp: identificador original con el margen vacío exterior ajustado, conservando las proporciones y su composición.
- public/images/productos.webp: imagen ilustrativa complementaria de huevos y alimento animal, creada con la herramienta integrada ImageGen, optimizada para la web.
- public/images/productos-source.png: original generado, conservado para futuras adaptaciones.

## Prompt final de ImageGen

Use case: product-mockup. Asset type: editorial product photography for a Cuban poultry and animal feed institutional website. Create a single landscape photograph, 1536x1024 feel, warm natural sunlight. Carefully styled still life on a warm beige stone tabletop: a shallow rustic basket with fresh white and brown chicken eggs on the left half, a small burlap sack overflowing with golden maize kernels and a wooden scoop full of animal feed pellets on the right half. Each side has a clear distinct focal subject, with ample visible real material textures. Understated agricultural magazine photography, premium but authentic, soft shadows, neutral ivory background, golden grain accents. No people, no labels, no logos, no text, no watermark, no typography, no packaging brands. Realistic edible eggs and realistic agricultural grains. The image will be used cropped to the left for egg products and cropped to the right for balanced animal feed.

Herramienta: ImageGen integrada, generación nueva con fondo opaco. La imagen representa una composición ilustrativa; no documenta la producción real de la entidad.

## Recursos añadidos en el rediseño, versión 2

- `public/images/hero-productos-source.png`: original del nuevo banner generado con ImageGen.
- `public/images/hero-productos.webp`: banner optimizado para la portada.
- `public/images/carne-aves-source.png`: fotografía ilustrativa de pollo generada con ImageGen.
- `public/images/carne-aves.webp`: versión optimizada para el catálogo.
- `public/images/huevos.webp`: recorte de la mitad izquierda de la imagen ilustrativa `productos.webp`.
- `public/images/alimentos.webp`: recorte de la mitad derecha de esa misma imagen.

Las imágenes nuevas se generaron con fondo opaco. No son fotografías reales de GEALAV. Las fotografías de las referencias externas no se reutilizaron.

### Prompt del banner

Use case: photorealistic-natural. Asset type: full-width homepage banner for GEALAV, a Cuban poultry and animal-feed enterprise. Produce a very wide landscape editorial food photograph with a 2.5:1 ratio. Scene: a sunlit rustic wooden farm table with a modest basket of fresh brown and white eggs, a fresh whole chicken prepared for cooking on a clean cream ceramic platter, and a burlap sack and wooden scoop of golden maize and feed pellets. Place all products in the right 60% of the frame, clearly visible, with uncluttered dark warm wood and gently blurred natural farm greenery on the left 40% as usable negative space for white website text added separately. Authentic, appetizing clean food photography, daylight from the right, warm gold and olive natural colors, crisp product textures, restrained composition, no people, no lettering, no labels, no logos, no watermark. No kitchen appliances, no ornamental props, no dramatic artificial lighting.

### Prompt de carne de aves

Use case: product-mockup. Asset type: catalogue product photograph for poultry enterprise. One fresh whole raw chicken prepared for cooking, clean pale cream skin, neatly arranged legs and wings, no feathers, no blood, presented on a simple white oval ceramic platter on an ivory tabletop. A small rosemary sprig beside the plate. Three-quarter overhead angle, centered entire chicken clearly visible, neutral off-white background, soft daylight shadows, crisp realistic appetizing food photography, landscape 4:3 composition. No text, logos, labels, people, packaging or watermarks.

## Recursos activos de la versión 3

La versión 3 utiliza siete fotografías nuevas generadas con ImageGen integrado. El registro completo de prompts y archivos finales se encuentra en [IMAGENES-V3.json](IMAGENES-V3.json). Los recursos originales y las imágenes generadas para versiones anteriores se mantienen en la carpeta como referencia.

| Archivo WebP | Aplicación |
|---|---|
| public/images/campo-hero-v3.webp | Portada y página 404 |
| public/images/huevos-v3.webp | Categoría y ficha de huevos |
| public/images/carne-v3.webp | Categoría y ficha de carne de aves |
| public/images/piensos-v3.webp | Categoría y ficha de alimentos balanceados |
| public/images/avicultura-v3.webp | Presentación empresarial y producción avícola |
| public/images/cereales-v3.webp | Nutrición animal |
| public/images/innovacion-v3.webp | Ciencia e innovación |

Los originales PNG se conservan con el mismo nombre y sufijo `-source.png`. Las imágenes se optimizaron como WebP sin modificar su contenido. El logotipo y el símbolo del huevo permanecen originales. La generación se realizó con fondo opaco; las escenas son ilustrativas.
