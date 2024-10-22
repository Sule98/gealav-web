import React from "react";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagramSquare,
  FaFacebookSquare,
  FaClock,
  FaHandPointDown,
} from "react-icons/fa";

import BfFooter from "@/public/footer.png";
import MobileFooter from "./FooterMobile";
import BgFooter from "@/public/bg-footer.png";
import { FaXTwitter } from "react-icons/fa6";
import Contacto from "../Header/Menu/Contact";
import { MenuItem } from "../Header/Menu/Menu";
import Menu from "../Header/Menu/Menu";
const FooterDesktop = () => {
  return (
    <div className=" relative hidden md:block ">
      <div className=" bottom-0 left-0 w-full  text-white bg-secondary   space-y-8 overflow-hidden">
        <div className="grid grid-cols-1 p-5 md:grid-cols-3 gap-8">
          <div className="ml-4 ">
            <p className="text-4xl flex justify-center ">CONTACTO</p>
            <div className="space-y-7 pt-2">
              <Contacto etiqueta="  Avenida Independencia Plaza de la Revolución Piso #6 (GEALAV)">
                <FaMapMarkerAlt />
              </Contacto>
              <Contacto etiqueta="  Lunes a Viernes 8:00am - 5:00pm">
                <FaClock />
              </Contacto>
              <Contacto etiqueta="(403) 255-552">
                <FaPhone />
              </Contacto>
              <Contacto etiqueta="dirección@gealav.com">
                <FaEnvelope />
              </Contacto>
              <Contacto etiqueta=" Lunes a Viernes 8:00am - 5:00pm">
                <FaClock />
              </Contacto>
            </div>
          </div>
          <div className="text-white text-2xl p-8 italic">
            <ul>
              <li className="hover:text-primary">
                <a href="/legal">Legislaciones</a>
              </li>
              <li>
                <a href="/estructura">Estructura</a>
              </li>
            </ul>
            <div></div>
          </div>
          <div>
            <h3 className="text-4xl flex justify-center  mb-4">SÍGUENOS</h3>
            <div className="animate-bounce duration-100 py-3 text-primary flex justify-center text-8xl">
              <FaHandPointDown />
            </div>
            <div className="flex  justify-center text-6xl space-x-9">
              <a href="www.facebook.com">
                <FaInstagramSquare />
              </a>

              <a href="www.facebook.com">
                <FaFacebookSquare />
              </a>

              <a href="www.facebook.com">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center bg-secondary">
        <Image className="w-full h-full" src={BgFooter} alt="footer" />
      </div>
    </div>
  );
};

export default FooterDesktop;
