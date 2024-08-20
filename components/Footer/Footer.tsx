import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Header from "../Header";
import MenuGrid from "../Header/Menu/MenuGrid";
import Contacto from "../Header/Menu/Contact";
import { IconType } from "react-icons";



const FooterContainer = () => {
  return (
    <div className=" bg-secondary  space-y-4">
      <div className="text-4xl font-bold flex justify-center text-primary">
        Contáctenos
      </div>
      <div className="grid grid-cols-3 gap-6 text-primary p-4 text-lg pb-4">
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
    </div>
  );
};

export default FooterContainer;
