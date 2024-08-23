import ParallaxBackground from "./ParallaxBackground";
import Image from "next/image";
import Logo from "@/public/logo_h.png"

interface HeroProps {
  title: string;
  subtitle?: string;
  imgSrc?: string;
  showLogo?: boolean;
}

export default function Hero({
  title,
  subtitle,
  imgSrc,
  showLogo = true,
}: HeroProps) {
  const commonProps = {
    image: imgSrc ?? "https://picsum.photos/1366/768",
    className: "relative h-screen bg-black",
  };

  return (
    <ParallaxBackground base={commonProps} lg={commonProps}>
      <div className="bg-black absolute w-full h-full top-0 left-0 opacity-50" />
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/4 text-primary uppercase tracking-widest left-1/4">
        <div>{title}</div>
        <div className="font-bold text-2xl lg:text-4xl max-w-lg">
          {subtitle}
        </div>
      </div>

      {showLogo && (
        <div className="absolute -bottom-[48px] lg:-bottom-[60px] w-[120px]  left-1/2 -translate-x-1/2 z-20 ">
          <Image src={Logo} alt="logo" />
        </div>
      )}
    </ParallaxBackground>
  );
}
