import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import github from "../../../public/assets/github.png";
import instagram from "../../../public/assets/instagram.png";
import linkedin from "../../../public/assets/linkedin.png";
import PC from "../../../public/assets/PC.png";
import photo2 from "../../../public/assets/photo2.png";

const Hero = () => {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'pt';
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (locale === 'en') {
      setWords([
        "Software Developer",
        "Full Stack Web Developer",
        "Web Designer",
        "Branding Producer",
        "CEO",
        "University Student",
        "Cat Mom",
      ]);
    } else {
      setWords([
        "Desenvolvedora de Software",
        "Desenvolvedora Full Stack",
        "Web Designer",
        "Produtora de Branding",
        "Empreendedora",
        "Universitária",
        "Mãe de Gato",
      ]);
    }
  }, [locale]);

  return (
    <section id="hero" className="w-full py-8">
      {/* MOBILE */}
      <div className="lg:hidden w-full px-8 flex flex-col items-center gap-10 whitespace-break-spaces break-words text-center">
        <div id="TITLE" className="flex flex-col items-center gap-2">
          <h1 className="text-transparent text-[40px] font-bold bg-clip-text bg-gradient-to-r from-linear-l to-linear-r leading-10">
            {t('hello')},
            <br />
            {t('apresentation')}
          </h1>
          <h2 className="text-white text-xl font-poppins">
            {" "}
            <span className="font-bold whitespace-nowrap">
              <Typewriter
                words={words}
                loop={0}
                cursor
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={600}
              />
            </span>
          </h2>
        </div>
        <div
          id="BUTTONS"
          className="w-[70vw] flex flex-col items-center font-poppins text-white"
        >
<a href="#contact" className="px-6 py-2 inline-block w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105 mt-3">
            <span className="block rounded-full cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                {t('contact-me')}
              </span>
            </a>
          <a
            href="/Curriculo-Julyana-Gusmao.pdf"
            download
            className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            <span className="block bg-main-color hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
              {t('download-cv')}
            </span>
          </a>
        </div>
        <div id="SOCIALS" className="lg:hidden flex gap-8 items-center">
          <div id="linkedin">
            <Link href="https://www.linkedin.com/in/julyana-gusmao/">
              <Image
                src={linkedin}
                alt="photo"
              />
            </Link>
          </div>
          <div id="github">
            <Link href="https://github.com/julyana-gusmao">
              <Image
                src={github}
                alt="photo"
              />
            </Link>
          </div>
          <div id="insta">
            <Link href="https://instagram.com/the2kira">
              <Image
                src={instagram}
                alt="photo"
              />
            </Link>
          </div>
        </div>
        <div id="PHOTO">
          <Image src={photo2} alt={"photo"} width={300} />
        </div>
      </div>

      {/* DESKTOP */}

      <div className="hidden w-full lg:flex justify-between items-center px-40 py-8">
        <div id="CONTAINER LEFT" className="flex gap-14 items-center">
        <div id="SOCIALS" className="flex flex-col gap-8 items-center">
          <div id="linkedin">
            <Link href="https://www.linkedin.com/in/julyana-gusmao/">
              <Image
                src={linkedin}
                alt="photo"
              />
            </Link>
          </div>
          <div id="github">
            <Link href="https://github.com/julyana-gusmao">
              <Image
                src={github}
                alt="photo"
              />
            </Link>
          </div>
          <div id="insta">
            <Link href="https://instagram.com/the2kira">
              <Image
                src={instagram}
                alt="photo"
              />
            </Link>
          </div>
        </div>
          <div id="BOX" className="flex flex-col gap-12">
          <div id="TITLE" className="flex flex-col items-left gap-5">
            <Image src={PC} alt={"photo"} width={80} />
            <h1 className="text-transparent text-5xl font-bold bg-clip-text bg-gradient-to-r from-linear-l to-linear-r">
              {t('hello')},
              <br />
              {t('apresentation')}
            </h1>
            <h2 className="text-white text-4xl font-poppins">
              {" "}
              <span className="font-bold whitespace-nowrap">
                <Typewriter 
                  words={words}
                  loop={0}
                  cursor
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={600}
                />
              </span>
            </h2>
          </div>
          <div id="BUTTONS" className="w-[30vw] h-[5vh] flex items-center font-poppins text-white gap-3">
            <a href="#contact" className="px-6 py-3 inline-block w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105 mt-3">
            <span className="block rounded-full cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                {t('contact-me')}
              </span>
            </a>
            <a
              href="/Curriculo-Julyana-Gusmao.pdf"
              download
              className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
            >
              <span className="block bg-main-color hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                {t('download-cv')}
              </span>
            </a>
          </div>
          </div>
        </div>
        <div id="CONTAINER RIGHT">
          <div id="PHOTO">
            <Image src={photo2} alt={"photo"} width={400}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
