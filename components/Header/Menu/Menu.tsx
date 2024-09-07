"use client";

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
  { text: "Estructura", link: "/estructura" },
  { text: "Noticias ", link: "/news" },
  { text: "Contacto", link: "#contact" },
  { text: "Legislaciones", link: "/legal" },
  { text: "Oportunidades ", link: "#oportunidades" },
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
    <ul className="  list-none m-0 p-3 overflow-hidden flex space-x-5">
      {menuItems
        .filter((item) => {
          return !item.expandido;
        })
        .map((item) => (
          <li className="float-left text-center" key={item.text}>
            <a
              className="transition-all duration-300 ease-in-out text-white font-bold py-1 px-2 rounded-md hover:shadow-sm hover:shadow-primary no-underline  bold hover:text-secondary border-b-4 border-transparent hover:border-primary"
              href={item.link}
            >
              {item.text}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Menu;
