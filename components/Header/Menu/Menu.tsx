"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";
import MenuSpecial from "./Special";
import MenuGrid from "./MenuGrid";

export type MenuItem = {
  text: string;
  link: string;
  expandido?: boolean;
  showInMenu1?: boolean;
  showInMenu2?: boolean;
  hijos?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { text: "Inicio", link: "#home", showInMenu1: true, showInMenu2: false },
  { text: "Estructura", link: "#estructura" },
  { text: "Noticias ", link: "news" },
  { text: "Contacto", link: "#contact" },
  { text: "Legislaciones", link: "#legal", expandido: true },
  { text: "Oportunidades de Negocio", link: "#negocio", expandido: true },
  {
    text: "Aqui Estamos",
    link: "#estamos",
    expandido: true,
    hijos: [
      { text: "Hello", link: "#" },
      { text: "Candela", link: "#" },
      { text: "Mundo", link: "#" },
    ],
  },
];

const Menu = () => {
  return (
    <ul className="list-none m-0 p-3 overflow-hidden bg-white">
      {menuItems
        .filter((item) => {
          return !item.expandido;
        })
        .map((item) => (
          <li className="float-left text-center" key={item.text}>
            <a
              className="flex items-center ml-3 transition-colors duration-300 text-secondary font-bold p-4 no-underline text-xl bold hover:text-text hover:underline"
              href={item.link}
            >
              {item.text}
            </a>
          </li>
        ))}
      <MenuSpecial menuItems={menuItems} />
    </ul>
  );
};

export default Menu;
