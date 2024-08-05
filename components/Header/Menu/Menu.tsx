"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";
import MenuSpecial from "./Special";

export type MenuItem = {
  text: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { text: "Inicio", link: "#home" },
  { text: "Noticias", link: "#news" },
  { text: "Contacto", link: "#contact" },
  { text: "Acerca de", link: "#about" },
  { text: "Oportunidades de Negocio", link: "#negocio" },
];

const Menu = () => {
  return (
    <ul className="list-none m-0 p-3 overflow-hidden bg-white">
      {menuItems.map((item) => (
        <li className="float-left text-center" key={item.text}>
          <a
            className="flex items-center ml-1 transition-colors duration-300 text-secondary p-2 no-underline hover:text-text hover:underline"
            href={item.link}
          >
            {item.text}
          </a>
        </li>
      ))}

      <MenuSpecial menuItems={menuItems}>
        <nav className="grid grid-cols-2 gap-4 p-10 text-3xl">
          <div>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="hover:text-primary duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </MenuSpecial>
    </ul>
  );
};

export default Menu;
