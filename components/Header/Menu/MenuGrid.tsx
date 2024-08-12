"use client";
import MenuSpecial from "./Special";
import Menu, { MenuItem } from "./Menu";
import React, { use, useState } from "react";
import Link from "next/link";
import { FaPlus, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contacto = ({
  etiqueta,
  children,
}: {
  etiqueta: string;
  children: string;
}) => (
  <div>
    <h1 className="text-primary font-bold italic">{etiqueta}:</h1>
    {children}
  </div>
);

const MenuGrid = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="grid grid-cols-3 gap-6 p-10 text-2xl">
      <div>
        <ul className="space-y-3">
          {menuItems
            .filter((item) => {
              return !item.showInMenu1;
            })
            .map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="hover:text-primary duration-300"
                >
                  <div className="flex justify-between items-center">
                    {item.text}
                    {item.hijos && <FaPlus />}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h1>hola</h1>
      </div>

      <div className="ml-2 space-y-4">
        <div className="text-4xl font-bold text-primary">Contacto</div>
        <div>Grupo Empresarial de Alimentos y Aves</div>
        <Contacto etiqueta="Dirección">
          Avenida Independencia Plaza de la Revolución Piso #6 (GEALAV)
        </Contacto>
        <Contacto etiqueta="Horario de Trabajo">
        Lunes a Viernes 8:00am - 5:00pm
        </Contacto>
        <Contacto etiqueta="Telefóno">
        (403) 255-5521
        </Contacto>
        <Contacto etiqueta="Mail">
        dirección@gealav.com
        </Contacto>
        <div>
         </div> 
        
        <div className="flex space-x-5 text-primary">
          <a href="https://www.facebook.com ">
            <FaFacebook className =" hover:text-text"size={30} />
          </a>
          <a href="https://www.instagram.com ">
            <FaInstagram  className =" hover:text-text" size={30} />
          
          </a>
          <a href="https://www.twitter.com ">
            <FaTwitter  className =" hover:text-text" size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default MenuGrid;
