import Hero from "@/components/Hero";
import PageFound from "@/public/notfound.png";

export default function NotFound() {
  return (
    <div className="relative bg-secondary ">
      <Hero
        title="Ups,Algo salio Malo"
        subtitle="Parece que la página que buscas no existe. ¿Te gustaría volver a la página principal?"
        imgSrc={PageFound.src}
        showLogo={false}
      ></Hero>

      <div className="  absolute bottom-32 left-1/4 transform -translate-x-1/2">
        <button className=" transition duration-300 p-2  bg-primary shadow-2xl shadow-accent  text-accent font-semibold rounded-2xl hover:bg-accent hover:text-primary hover:shadow-">
          <a className="text-2xl m-5" href="/">
            Regresar al Inicio
          </a>
        </button>
      </div>
    </div>
  );
}
