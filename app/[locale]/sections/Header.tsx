import close from "@/close-button.png";
import hamburger from "@/hamburguer-linear.png";
import logo from "@/kira-devs.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("header");
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {/* MOBILE */}
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
        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>
        <div className="hidden lg:flex items-center gap-8 text-lg text-gray-400">
          <Link
            href={"#aboutMe"}
            className="hover:text-white cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            {t("aboutMe")}
          </Link>
          <Link
            href={"#coding"}
            className="hover:text-white cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            {t("projects")}
          </Link>
          <Link
            href={"#contact"}
            className="text-white cursor-pointer bg-gradient-to-br from-linear-l to-linear-r px-6 py-2 inline-block border-none rounded-full transition-all duration-100 ease-in transform hover:scale-105"
          >
            {t("contact")}
          </Link>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div
        className={`lg:hidden shadow-md shadow-gray-900 bg-opacity-95 fixed top-[9vh] left-0 w-full h-[40vh] bg-sub-color z-20 navbar-transition ${
          navbarOpen ? "navbar-open" : "navbar-closed"
        }`}
        style={{ backdropFilter: navbarOpen ? "blur(5px)" : "none" }}
      >
        <div className="flex flex-col items-center gap-9 mt-5 text-white font-poppins text-xl">
          <div className="flex gap-4 items-center ">
            <span className="text-base text-details">{t("language")}:</span>
            <LanguageSwitcher />
          </div>

          <Link
            href={"#aboutMe"}
            className="hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            {t("aboutMe")}
          </Link>
          <Link
            href={"#coding"}
            className="hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            {t("projects")}
          </Link>
          <Link
            href={"#contact"}
            className="hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
