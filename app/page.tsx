import Hero from "@/components/Hero";
import Banner from "@/public/banner.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        title="Bienvenido a mi sitio web"
        subtitle="Explora nuestras increíbles ofertas"
        // Ruta a la imagen de fondo
        showLogo={true} // Opcional: muestra el logotipo
        imgSrc={Banner.src}
      />
     HOLAAA
      <main className="h-screen"></main>
   
     
    </div>
   
  );
}
