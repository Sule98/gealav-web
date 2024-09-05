import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Header from "../Header";
import MenuGrid from "../Header/Menu/MenuGrid";
import Contacto from "../Header/Menu/Contact";
import { IconType } from "react-icons";
import BfFooter from "@/public/footer.png";

const FooterContainer = () => {
  return (
    <div className=" relative ">
      <div className="absolute bottom-0 left-0 w-full h-96 text-white bg-secondary rounded-t-full">
        <div className="   flex p-7 justify-center">
          <a className="transition-all duration-300 underline-animation ease-in-out text-4xl font-bold  hover:text-primary ">
            {" "}
            CONTÁCTENOS
          </a>
        </div>
        <div className="  grid grid-cols-3 gap-6 p-4 text-base pb-4">
          <div className="duration-500 hover:animate-bounce flex flex-col justify-center items-center gap-3  hover:text-primary ">
            <FaPhone className="hover:animate-bounce" size={30}></FaPhone>
            <Contacto>56073407 1272727</Contacto>
          </div>

          <div className=" duration-500 hover:animate-bounce flex flex-col justify-center items-center gap-3  hover:text-primary">
            <FaMapMarkerAlt size={30}></FaMapMarkerAlt>
            <Contacto>
              <p>Avenida Independencia Ministerio de la Agricultura Piso#6</p>
            </Contacto>
          </div>
          <div className="flex  hover:animate-bounce flex-col justify-center items-center gap-3  hover:text-primary">
            <FaEnvelope size={30}></FaEnvelope>
            <Contacto>suleidis1998@gmail.com</Contacto>
          </div>
        </div>
        <div className=" flex justify-center">
          <Image src={BfFooter} alt="logo" width={400} height={250} />
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
