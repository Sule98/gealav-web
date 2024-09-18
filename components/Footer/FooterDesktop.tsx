import React from "react";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagramSquare,
  FaFacebookSquare,
  FaClock,
} from "react-icons/fa";

import BfFooter from "@/public/footer.png";
import MobileFooter from "./FooterMobile";
import BgFooter from "@/public/bg-footer.png";
import { FaXTwitter } from "react-icons/fa6";

const FooterDesktop = () => {
  return (
    <div className=" relative hidden md:block ">
      <div className="absolute  bottom-0 left-0 w-full  text-white bg-secondary font-bold italic rounded-t-full space-y-8 overflow-hidden">
        <div className="   flex p-3 justify-center">
          <p className="p-2 rounded-xl transition-all duration-300  ease-in-out text-4xl shadow-lg shadow-accent bg-transparent font-bold  hover:text-primary ">
            CONTÁCTENOS
          </p>
        </div>
        
        <div className="  text-lg flex space-x-4 border-2 border-dotted p-2 border-primary text-white font-bold italic justify-center items-center ">
          <div className="flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 pr-8">
            
              <a href="www.facebook.com">
              <FaFacebookSquare className="mr-2" size={30}> </FaFacebookSquare>
              </a>
           
          </div>

          <div className=" flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 pr-5 ">
            <a href="www.instagram.com">
              <FaInstagramSquare className="mr-2" size={30}></FaInstagramSquare>
            </a>
          </div>
          <div className="flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <a href="www.twitter.com">
              <FaXTwitter className="mr-2" size={30}></FaXTwitter>
            </a>
          </div>
        </div>
        <div className="  text-lg flex space-x-4 border-2 border-dotted p-2  border-primary text-white font-bold italic justify-center items-center ">
          <div className=" flex pr-8">
            <FaClock className="mr-2" size={35}></FaClock>
            <p> Lunes a Viernes 8:00am - 5:00pm</p>
          </div>
        </div>

        <div className="  text-base flex space-x-4 border-2 border-dotted p-2  border-primary text-white font-bold italic justify-center items-center ">
          <div className="flex hover:shadow-2xl shadow-primary p-2 hover:text-primary duration-300 pr-8">
            <FaPhone className="mr-2" size={30}></FaPhone>
            <a>56073407 1272727</a>
          </div>

          <div className=" flex pr-5 hover:shadow-2xl shadow-primary p-2 hover:text-primary duration-300">
            <FaMapMarkerAlt className="mr-2" size={30}></FaMapMarkerAlt>
            <a href="https://www.google.com/maps/place/Ministerio+de+la+Agricultura/@23.1141481,-82.3922617,16z/data=!4m6!3m5!1s0x88cd7757bb31bc9b:0x8267b7c1be355725!8m2!3d23.1134685!4d-82.3905838!16s%2Fg%2F119vyyhq5?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">
              Avenida Independencia Ministerio de la Agricultura Piso#6
            </a>
          </div>
          <a href="https://mail.google.com/">
            <div className="flex hover:shadow-2xl shadow-primary p-2 hover:text-primary duration-300">
              <FaEnvelope className="mr-2" size={30}></FaEnvelope>
              suleidis1998@gmail.com
            </div>
          </a>
        </div>

        {/* <div className=" flex justify-center">
          <Image src={BfFooter} alt="logo" width={400} height={250} />
        </div> */}
        <div
          className="flex  bg-secondary"
          style={{
            backgroundImage: `url(${BgFooter.src})`,
            height: BgFooter.height,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FooterDesktop;
