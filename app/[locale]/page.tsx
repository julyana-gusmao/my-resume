'use client'

import {useTranslations} from 'next-intl';
import AboutMe from "./components/AboutMe";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <nav className="bg-sub-color shadow-md shadow-gray-950 flex h-[10vh] w-full fixed z-10 lg:px-32 px-8 py-2 items-center justify-between">
        <Header />
      </nav>
      <main className="pt-24 w-full">
        <Hero />
        <AboutMe />
        <Skills />
        <Coding />
        <Contact />
      </main>
    </>
  );
}
