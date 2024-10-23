import Propaganda from "@/components/Propaganda/propaganda";
import { cards } from "./_data";
import Hero from "@/components/Hero";
import BannerImg from "@/public/banner.jpg";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Hero
        imgSrc={BannerImg.src}
        title="Bienvenido a Gealav"
        subtitle="Explora nuestras opciones"
      />
      <div className="h-20" />
      <Propaganda
        title="Grupo Empresarial Productor y Comercializador Avícola y Alimentos Balanceados"
        subtitle="Nuestro compromiso es con el pueblo"
        background="white"
        cards={cards}
      />
    <Footer></Footer>
    </>
   
    
  );
}
