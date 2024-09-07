"use client";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contacto = ({
  etiqueta,
  children,
  icons,
}: {
  etiqueta?: string;
  children: ReactNode;
  icons?: Icon;
}) => (
  <div>
    <h1 className="text-primary font-bold italic">{etiqueta}</h1>
    {children}
  </div>
);
<div className="ml-2 space-y-4">
  <nav>
    <div className="text-4xl font-bold text-primary">Contacto</div>
    <div>Grupo Empresarial de Alimentos y Aves</div>
    <Contacto etiqueta="Dirección">
      Avenida Independencia Plaza de la Revolución Piso #6 (GEALAV)
    </Contacto>
    <Contacto etiqueta="Horario de Trabajo">
      Lunes a Viernes 8:00am - 5:00pm
    </Contacto>
    <Contacto etiqueta="Teléfono">(403) 255-5521</Contacto>
    <Contacto etiqueta="Mail">dirección@gealav.com</Contacto>

    <div className="flex space-x-5 text-primary">
      <a href="https://www.facebook.com">
        <FaFacebook className="hover:text-text" size={30} />
      </a>
      <a href="https://www.instagram.com">
        <FaInstagram className="hover:text-text" size={30} />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter className="hover:text-text" size={30} />
      </a>
    </div>
  </nav>
</div>;

export default Contacto;
