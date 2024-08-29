import Image from "next/image";
import React from "react";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <div className=" fixed z-[999] w-screen flex justify-between  items-center bg-black opacity-75 px-5">
      <div className="hover:skew-y-3">
        <a href="#Inicio">
        <Image src="/logo.png" alt="Logo" width={200} height={250}/>
        </a>
       
      </div>
      <div className="flex ">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
