import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Header from "../Header";
import MenuGrid from "../Header/Menu/MenuGrid";
import Contacto from "../Header/Menu/Contact";
import { IconType } from "react-icons";
import BfFooter from "@/public/footer.svg";

const FooterContainer = () => {
  return (
    <footer
      className=" w-full bg-cover fill-slate-500 bg-center fixed bottom-0"
      style={{ backgroundImage: `url(${BfFooter.src})` }}
    >
      <div className=" relative text-4xl font-bold flex justify-center text-primary">
        Contáctenos
      </div>
      <div className=" relative grid grid-cols-3 gap-6 text-primary p-4 text-lg pb-4">
        <div className="duration-300 flex flex-col justify-center items-center gap-3  hover:text-text  ">
          <FaPhone className="hover:animate-bounce" size={35}></FaPhone>
          <Contacto>56073407 1272727</Contacto>
        </div>

        <div className="flex flex-col justify-center items-center gap-3  hover:text-text">
          <FaMapMarkerAlt size={35}></FaMapMarkerAlt>
          <Contacto>
            <p>Avenida Independencia Ministerio de la Agricultura Piso#6</p>
          </Contacto>
        </div>
        <div className="flex flex-col justify-center items-center gap-3  hover:text-text">
          <FaEnvelope size={35}></FaEnvelope>
          <Contacto>suleidis1998@gmail.com</Contacto>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
