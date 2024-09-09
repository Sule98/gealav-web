"use client";

import Link from "next/link";

export type MenuItem = {
  text: string;
  link: string;
  expandido?: boolean;
  showInMenu1?: boolean;
  showInMenu2?: boolean;
  hijos?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { text: "Inicio", link: "/", showInMenu1: true, showInMenu2: false },
  { text: "Estructura", link: "/estructura" },
  { text: "Noticias ", link: "/noticias" },
  { text: "Contacto", link: "#contacto" },
  { text: "Legislaciones", link: "/legal" },
  { text: "Oportunidades ", link: "/oportunidades" },
  {
    text: "Aquí Estamos",
    link: "/aqui-estamos",
    expandido: true,
    hijos: [
      { text: "Aquí Estamos 1", link: "/aqui-estamos/uno" },
      { text: "Aquí Estamos 2", link: "/aqui-estamos/dos" },
      { text: "Aquí Estamos 3", link: "/aqui-estamos/tres" },
    ],
  },
];

const Menu = () => {
  return (
    <ul className="  list-none m-0 p-3 overflow-hidden flex space-x-5">
      {menuItems
        .filter((item) => {
          return !item.expandido;
        })
        .map((item) => (
          <li className="float-left text-center" key={item.text}>
            <Link
              className="transition-all duration-300 ease-in-out text-white font-bold py-1 px-2 rounded-md hover:shadow-sm hover:shadow-primary no-underline  bold hover:text-secondary border-b-4 border-transparent hover:border-primary"
              href={item.link}
            >
              {item.text}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Menu;
