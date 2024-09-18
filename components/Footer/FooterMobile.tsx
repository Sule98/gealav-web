import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,FaFacebookSquare,FaInstagramSquare, } from "react-icons/fa";
import Contacto from "../Header/Menu/Contact";
import BfFooter from "@/public/footer.png";
import BgFooter from "@/public/bg-footer.png";
import { FaXTwitter } from "react-icons/fa6";

const FooterMobile = () => (
  <div className="md:hidden relative ">
    <div className="absolute  bottom-0 left-0 w-full h-96 text-white bg-secondary rounded-t-full">
      <div className="   flex p-3 justify-center">
        <a className="transition-all duration-300 shadow-2xl shadow-accent underline-animation ease-in-out text-lg font-bold ">
          CONTÁCTENOS
        </a>
      </div>
      <div className="  text-lg flex space-x-2  text-white font-bold italic justify-center items-center ">
          <div className="flex  pr-8">
            
              <a href="www.facebook.com">
              <FaFacebookSquare className="mr-2" size={30}> </FaFacebookSquare>
              </a>
           
          </div>

          <div className=" flex  pr-5 ">
            <a href="www.instagram.com">
              <FaInstagramSquare className="mr-2" size={30}></FaInstagramSquare>
            </a>
          </div>
          <div className="flex ">
            <a href="www.twitter.com">
              <FaXTwitter className="mr-2" size={30}></FaXTwitter>
            </a>
          </div>
        </div>
      <div className="pl-4 space-y-4 m-4 text-base pb-4 space-x-3 justify-center items-center">
        <div className="flex ">
          <FaPhone className="mr-2" size={20}></FaPhone>
          <Contacto>56073407 1272727</Contacto>
        </div>
        <div className="flex">
          <FaMapMarkerAlt className="mr-2" size={20}></FaMapMarkerAlt>
          <Contacto>
            <p>Avenida Independencia Ministerio de la Agricultura Piso#6</p>
          </Contacto>
        </div>
        <div className="flex">
          <FaEnvelope className="mr-2" size={20}></FaEnvelope>
          <Contacto>suleidis1998@gmail.com</Contacto>
        </div>
      </div>
      <div className=" flex justify-center ">
        <Image src={BfFooter} alt="logo" width={200} height={150} />
      </div>
    </div>
    <div className="w-[500] h-[50px] flex pt-3 bg-secondary relative">
      <Image src={BgFooter} alt="end-footer" fill />
    </div>
  </div>
);

export default FooterMobile;
