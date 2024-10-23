import { getMenu } from "@/lib/get-global-elements";
import Link from "next/link";

export type MenuItem = {
  href: string;
  title: string;
};

const Menu = async () => {
  const menuItems: MenuItem[] = await getMenu();

  return (
    <ul className="  list-none m-0 p-3 overflow-hidden flex space-x-5">
      {menuItems.map((item) => (
        <li className="float-left text-center" key={item.title}>
          <Link
            className="transition-all duration-300 ease-in-out text-white font-bold py-1 px-2 rounded-md hover:shadow-sm hover:shadow-primary no-underline  bold hover:text-secondary border-b-4 border-transparent hover:border-primary"
            href={item.href}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
