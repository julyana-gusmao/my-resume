'use client'

import AboutMe from "./sections/AboutMe";
import Coding from "./sections/Coding";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <nav className="bg-sub-color shadow-md shadow-gray-950 flex h-[10vh] w-full fixed z-50 lg:px-32 px-8 py-2 items-center justify-between">
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
