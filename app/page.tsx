import Propaganda from "@/components/Propaganda/propaganda";
import { FaRocket, FaRegEye, FaUsers, FaHandshake } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import BgPage2 from "@/public/bg-page2.png";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero" 
import Logo from "@/public/logo_h.png"


const App: React.FC = () => {
 
  const cards = [
    {
      icon: <TbTargetArrow />,
      description:
        "Misión: Satisfacer la demanda de carne de aves, huevo y alimento animal de manera sostenible desarrollando estrategias para el incrementode las producciones con calidad  basadas en la ciencia, tecnología e innovación  contando con la participación comprometida de todos los trabajadores.",
    },
    {
      icon: <FaRegEye />,
      description:
        " Visión: Distinguidos por la excelencia en   producciones avícolas preferidos en la ali    mentación de los cubanos y en piensos para el consumo de los animales con apertura a me cados internacionalesde todos los trabajadores.",
    },
    {
      icon: <FaUsers />,
      description:
        "Misión: Sssatisfacer la demanda de carne de aves, huevo y alimento animal de manera sostenible desarrollando estrategias para el incrementode las producciones con calidad  basadas en la ciencia, tecnología e innovación  contando con la participación comprometida de todos los trabajadores.",
    },
  ];

  return (
    <Propaganda
      title="Grupo Empresarial Productor y Comercializador Avícola y Alimentos Balanceados"
      subtitle="Nuestro compromiso es con el pueblo"
      background="white"
      cards={cards}
    />
  );
};
<Footer />;
export default App;
