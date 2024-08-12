import React, { ReactNode, useState } from "react";
import Menu, { MenuItem } from "./Menu";
import { FaBars, FaTimes, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";
import MenuGrid from "./MenuGrid";

const MenuSpecial = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="w-screen h-screen bg-secondary absolute top-0 left-0">
      <button
        onClick={() => setIsOpen(false)}
        className="text-primary absolute ml-1 hover:text-text top-0 right-1 p-4 flex  duration-500 font-bold"
      >
        <FaTimes className="ml-2 mr-1 text-2xl" />
        CLOSE
      </button>
      <MenuGrid menuItems={menuItems} />
    </div>
  ) : (
    <button
      onClick={() => setIsOpen(true)}
      className="text-secondary hover:text-text flex text-3xl ml-6 p-3 text-center duration-300 ease-in-out transition-all"
    >
      <FaBars className="ml-6 text-4xl" />
      MENU
    </button>
  );
};

export default MenuSpecial;
