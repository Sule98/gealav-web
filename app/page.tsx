import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ParallaxBackground from "@/components/Hero/ParallaxBackground";
import Logo from "@/public/logo.png";
import Image from "next/image";
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
      <main className="h-screen">
        this is the content
      </main>
      <Footer />
    </div>
  );
}
