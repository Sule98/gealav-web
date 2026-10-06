export const products = [
 { id: "huevos", category: "Huevos", name: "Huevos de consumo", description: "Producción y comercialización de huevos para la alimentación cotidiana de las familias cubanas.", image: "/images/huevos-v3.webp", position: "center", label: "Huevos de consumo", details: ["Línea de producción avícola", "Alimento para consumo humano", "Información comercial mediante consulta"] },
 { id: "aves", category: "Carne de aves", name: "Carne de aves", description: "Producción y comercialización de carne de aves como parte de la oferta alimentaria del grupo.", image: "/images/carne-v3.webp", position: "center", label: "Carne de aves", details: ["Línea de producción avícola", "Alimento para consumo humano", "Presentaciones y disponibilidad por confirmar"] },
 { id: "alimentos", category: "Alimentos balanceados", name: "Alimentos balanceados", description: "Producción de piensos y alimentos para animales que apoyan el desarrollo de la actividad agropecuaria.", image: "/images/piensos-v3.webp", position: "center", label: "Alimentos balanceados", details: ["Nutrición y alimentación animal", "Apoyo a la producción agropecuaria", "Información sobre piensos mediante consulta"] },
] as const;

export const articles = [
  { slug: "del-campo-a-la-mesa", category: "Producción avícola", title: "La cadena de producción avícola", excerpt: "Una mirada al trabajo que hay detrás de la producción de alimentos.", image: "/images/avicultura-v3.webp", imageAlt: "Gallinas blancas en un entorno avícola; imagen ilustrativa", body: "La producción avícola conecta el cuidado de las aves, la alimentación animal y la comercialización. Cada etapa forma parte de un mismo propósito: contribuir a la alimentación de las familias cubanas. Este espacio propone acercar al público al trabajo diario de las empresas y sus trabajadores." },
  { slug: "nutricion-animal", category: "Nutrición animal", title: "Alimentos balanceados y nutrición animal", excerpt: "El papel de los alimentos balanceados en la producción avícola.", image: "/images/cereales-v3.webp", imageAlt: "Maíz en un campo agrícola; imagen ilustrativa", body: "La nutrición animal forma parte de la base de la producción avícola. Los alimentos balanceados acompañan las diferentes necesidades de los animales y apoyan el desarrollo de la actividad productiva. Este espacio permitirá compartir conocimientos, proyectos e iniciativas del grupo." },
  { slug: "compromiso-con-el-futuro", category: "Ciencia e innovación", title: "Innovación en la producción de alimentos", excerpt: "Ciencia, innovación y el compromiso de nuestra gente.", image: "/images/innovacion-v3.webp", imageAlt: "Examen de huevos en un laboratorio agrícola; imagen ilustrativa", body: "La misión de GEALAV sitúa la sostenibilidad, la ciencia, la tecnología y la innovación en el centro del desarrollo de sus producciones. La participación comprometida de los trabajadores es parte esencial de esta visión. Este espacio está pensado para dar a conocer las iniciativas y experiencias del grupo." },
] as const;

export const companies = [
  { name: "Empresa Productora de Piensos Occidente", area: "Alimentación animal" },
  { name: "Empresa Productora de Piensos Centro", area: "Alimentación animal" },
  { name: "Empresa Productora de Piensos Oriente", area: "Alimentación animal" },
  { name: "Empresa de Silos", area: "Alimentación animal" },
  { name: "Empresa Circuladora de Materias Primas y Premezclas", area: "Alimentación animal" },
  ...["Pinar del Río", "Artemisa", "Mayabeque", "Matanzas", "Cienfuegos", "Santa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo"].map(place => ({ name: `Empresa Avícola ${place}`, area: "Avicultura" })),
  { name: "Empresa Equipos Avícolas Celso Stakeman", area: "Servicios e investigación" },
  { name: "Empresa Productora y Comercializadora Avícola", area: "Avicultura" },
  { name: "Empresa Avícola de Genética y Pie de Cría", area: "Avicultura" },
  { name: "Instituto de Investigaciones Avícolas", area: "Servicios e investigación" },
];

export const institutionalPages: Record<string, { title: string; eyebrow: string; intro: string; sections: { title: string; body: string }[] }> = {
  nosotros: { title: "Quiénes somos", eyebrow: "Conoce GEALAV", intro: "Somos el Grupo Empresarial de Alimentos y Aves. Trabajamos por el desarrollo de la producción avícola y de alimentos balanceados en Cuba.", sections: [
    { title: "Una historia que empieza en el campo", body: "El manual de identidad de GEALAV recoge la creación del Combinado Avícola Nacional en 1964, con el propósito de producir huevos para el pueblo. Ese antecedente forma parte de una historia vinculada a la alimentación y al desarrollo de la avicultura en Cuba." },
    { title: "Nuestra misión", body: "Satisfacer la demanda de carne de aves, huevos y alimento animal de manera sostenible, desarrollando estrategias para incrementar las producciones con calidad, basadas en la ciencia, la tecnología y la innovación y con la participación comprometida de todos los trabajadores." },
    { title: "Nuestra visión", body: "Distinguirnos por la excelencia en las producciones avícolas y los piensos para el consumo de los animales, y contribuir a la alimentación de los cubanos con apertura a mercados internacionales." },
    { title: "Nuestra gente", body: "El conocimiento, la dedicación y el compromiso de los trabajadores dan sentido a cada etapa de nuestra actividad." },
  ] },
  estructura: { title: "Empresas del grupo", eyebrow: "Grupo empresarial", intro: "Una cadena que integra producción avícola, nutrición animal y comercialización.", sections: [
    { title: "Producción avícola", body: "La producción de huevos y carne de aves constituye una de las actividades principales del grupo." },
    { title: "Alimentos balanceados", body: "La producción y comercialización de alimentos para animales apoyan el desarrollo de la actividad agropecuaria." },
    { title: "Investigación y servicios", body: "La investigación avícola, la genética y los servicios de apoyo complementan la cadena productiva. El directorio de referencia de esta página permite explorar las entidades recogidas en el manual de identidad de 2023." },
  ] },
  privacidad: { title: "Privacidad", eyebrow: "Privacidad del prototipo", intro: "Esta versión es una propuesta de sitio web para presentar a GEALAV.", sections: [
    { title: "Formulario de demostración", body: "El formulario valida los datos en tu navegador. No envía mensajes ni guarda información en un servidor. Al cerrar o recargar la página, los datos del formulario se descartan." },
    { title: "Sin seguimiento publicitario", body: "El prototipo no incorpora herramientas de analítica, cookies publicitarias ni servicios de seguimiento." },
    { title: "Próxima versión", body: "Antes de habilitar el envío de consultas se definirán el responsable, la finalidad del tratamiento, los canales de contacto y la política de privacidad oficial de la entidad." },
  ] },
};
