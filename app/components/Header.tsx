import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import brFlag from "../../public/assets/br-flag.png";
import hamburger from "../../public/assets/hamburguer-linear.png";
import logo from "../../public/assets/kira-devs.png";
import usFlag from "../../public/assets/us-flag.png";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {/* MOBILE */}

      <div id="container-logo">
        <Image src={logo} alt={"logotype nav"} width={150} />
      </div>

      <div id="container-right" className="flex items-center gap-8">
        {/* COMPLETAMENTE PLACEBO POR ENQUANTO, DEPOIS DEFINIR COMO DAR TRANSLATE */}
        <div className="flex gap-4">
          <Image src={brFlag} alt={"brFlag"} className="" />
          <Image src={usFlag} alt={"usFlag"} className="" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setNavbarOpen(true)} className="md:hidden">
            <Image src={hamburger} alt="hamburger menu" className="mt-1" />
          </button>

          {/* Adicionar o hamburger com useState aqui */}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 text-lg text-gray-400">
          <Link
            href={"#aboutMe"}
            className="hover:text-white cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            Sobre Mim
          </Link>
          <Link
            href={"#coding"}
            className="hover:text-white cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            Projetos
          </Link>
          <Link
            href={"#contact"}
            className="text-white cursor-pointer bg-gradient-to-br from-linear-l to-linear-r px-6 py-2 inline-block border-none rounded-full transition-all duration-100 ease-in transform hover:scale-105"
          >
            Contato
          </Link>
        </div>

        {/* ADICIONAR UMA SETINHA PARA SUBIR */}
      </div>
    </>
  );
};

export default Header;
