import React from "react";
import Image from "next/image";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <footer>
      <FooterDesktop />
      <FooterMobile />
    </footer>
  );
};
export default Footer;
