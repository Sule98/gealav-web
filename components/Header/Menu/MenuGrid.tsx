"use client";
import MenuSpecial from "./Special";
import Menu, { MenuItem } from "./Menu";
import React, { use, useState } from "react";
import Link from "next/link";




const MenuGrid = ({menuItems}: { menuItems: MenuItem[] }) => {
  return (
    <nav className="grid grid-cols-2 gap-4 p-10 text-3xl">
      <div>
        <ul className="space-y-3">
          <li className="text-primary">
            <a href="#teamGealav">Team Gealav </a>
          </li>
          
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
  );
};
export default MenuGrid;
