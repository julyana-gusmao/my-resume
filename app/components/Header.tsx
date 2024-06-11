import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import brFlag from "../../public/assets/br-flag.png";
import hamburger from "../../public/assets/hamburguer-linear.png";
import close from "../../public/assets/close-button.png";
import logo from "../../public/assets/kira-devs.png";
import usFlag from "../../public/assets/us-flag.png";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div id="container-logo">
        <Image src={logo} alt={"logotype nav"} width={150} />
      </div>

      <div id="container-right" className="flex items-center gap-8">
        <div className="md:hidden">
          <button
            id="openNavbar"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden"
          >
            <Image
              src={navbarOpen ? close : hamburger}
              alt={navbarOpen ? "close menu" : "hamburger menu"}
              className="mt-1"
            />
          </button>
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
      </div>

      {/* MOBILE NAVBAR */}
      <div
        className={`lg:hidden shadow-md shadow-gray-900 bg-opacity-95 fixed top-[9vh] left-0 w-full h-[30vh] bg-sub-color z-20 navbar-transition ${
          navbarOpen ? "navbar-open" : "navbar-closed"
        }`} style={{ backdropFilter: navbarOpen ? "blur(5px)" : "none" }} 
      >
        <div className="flex flex-col items-center gap-9 mt-5 text-white font-poppins text-xl">

        <div className="flex gap-4 items-center ">
          <span className="text-base text-details">Idioma:</span>
          <Image src={brFlag} alt={"brFlag"} />
          <Image src={usFlag} alt={"usFlag"} />
        </div>

          <Link
            href={"#aboutMe"}
            className="hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            Sobre Mim
          </Link>
          <Link
            href={"#coding"}
            className="hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            Projetos
          </Link>
          <Link
            href={"#contact"}
            className="hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            Contato
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
