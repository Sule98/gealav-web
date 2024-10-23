import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaBars, FaTimes, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";
import BgPage2 from "@/public/bg-page2.png";

interface Card {
  icon: ReactNode;
  description: string;
}
interface PropagandaProps {
  title: string;
  subtitle: string;
  background: string;
  cards: Card[];
}
const Propaganda: React.FC<PropagandaProps> = ({
  title,
  subtitle,
  background,
  cards,
}) => {
  if (cards.length > 3) {
    throw new Error("Puedes añadir un máximo de 3 tarjetas.");
  }

  return (
    <div
      className="p-11 space-y-8 text-secondary"
      style={{ background }}
    >
      <h1 className=" flex text-lg justify-center ">{title}</h1>
      <h2 className="text-5xl flex  justify-center font-bold ">{subtitle}</h2>
      <div className="flex space-x-6 mt-4">
        {cards.map((card, index) => (
          <div className="flex-1  " key={index}>
            <div className=" text-6xl  flex justify-center"> {card.icon}</div>

            <div className=" shadow-lg shadow-accent flex min-h-[180px] border-2 justify-center p-3 border-secondary rounded">
              <p> {card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[200px] relative">
        <Image className="object-cover" src={BgPage2} alt="" fill />
        Hola
      </div>
    </div>
  );
};

export default Propaganda;
