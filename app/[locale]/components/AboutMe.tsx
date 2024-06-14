import Image from "next/image";
import photo from "../../../public/assets/about-image.png";
import certificate from "../../../public/assets/certificate.png";
import icon from "../../../public/assets/icon.png";
import projects from "../../../public/assets/done.png";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations('about');
  
  return (
    <section id="aboutMe" className="text-white w-full">
      
      {/* MOBILE */}

      <div className="lg:hidden flex flex-col w-full items-center pt-4 pb-16">
        <div id="CONTAINER RIGHT" className="flex flex-col items-center gap-7">
          <div id="TEXT" className="flex flex-col gap-3 font-poppins items-center">
            <h2 className="font-semibold head-mobile">{t('AboutMe')}</h2>
            <p className="text-base text-center font-regular tracking-normal leading-7 w-[80vw]">
              {t('text')}
            </p>
          </div>
          <div id="BOXES ABOUT" className="flex gap-3 w-[80vw]">
            <div id="BOX-PROJETOS"
              className="flex flex-col gap-2 items-center text-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-20 py-2 px-4"
            >
              <Image src={projects} alt={"projetos"} width={22} />
              <h5>{t('projects-done')}</h5>
              <p className="text-details text-sm">{t('projects-done-number')}</p>
            </div>
            <div id="BOX-EXPERIENCIA"
              className="flex flex-col gap-2 items-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-20 py-2 px-2"
            >
              <Image src={certificate} alt={"experiencia"} width={24} />
              <h5>{t('experience')}</h5>
              <p className="text-details text-sm">{t('time-experience')}</p>
            </div>
            <div id="BOX-ICON"
              className="flex flex-col gap-2 items-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-20 py-2 px-2"
            >
              <Image src={icon} alt={"naosei"} width={24} />
              <h5>{t('nao-sei')}</h5>
              <p className="text-details text-sm">{t('nao-sei')}</p>
            </div>
          </div>
          <div id="BUTTONS" className="w-full h-[5vh] flex flex-col items-center font-poppins text-white gap-3">
            <a
              href="#coding"
              className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 text-base cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
            >
              <span className="block bg-main-color hover:bg-slate-800 rounded-full py-2 px-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                {t('watch-my-projects')}
              </span>
            </a>
            <a
              href="#"
              className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 text-base cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
            >
              <span className="block bg-main-color hover:bg-slate-800 rounded-full py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                {t('download-cv')}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP */}

      <div className="hidden w-full lg:flex justify-around gap-40 items-center px-44 py-16">
        <div id="CONTAINER LEFT">
          <div id="PHOTO">
            <Image src={photo} alt={"photo"} width={1000} />
          </div>
        </div>
        <div id="CONTAINER RIGHT" className="flex flex-col items-center gap-7">
          <div id="TEXT" className="flex flex-col gap-3 font-poppins w-[30vw]">
            <h2 className="font-semibold">{t('AboutMe')}</h2>
            <p className="text-base font-regular tracking-normal leading-7">
              {t('text')}
            </p>
          </div>
          <div id="BOXES ABOUT" className="flex gap-3 w-full">
            <div
              id="BOX-EXPERIENCIA"
              className="flex flex-col gap-1 items-center justify-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-30 
          py-2"
            >
              <Image src={certificate} alt={"experiencia"} width={24} />
              <h5>{t('experience')}</h5>
              <p className="text-details text-sm">{t('time-experience')}</p>
            </div>
            <div
              id="BOX-PROJETOS"
              className="flex flex-col gap-1 items-center justify-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-30 
          py-2"
            >
              <Image src={projects} alt={"projetos"} width={22} />
              <h5>{t('projects-done')}</h5>
              <p className="text-details text-sm">{t('projects-done-number')}</p>
            </div>
            <div
              id="BOX-ICON"
              className="flex flex-col gap-1 items-center justify-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-30 py-2"
            >
              <Image src={icon} alt={"naosei"} width={24} />
              <h5>{t('nao-sei')}</h5>
              <p className="text-details text-sm">{t('nao-sei')}</p>
            </div>
          </div>
          <div id="BUTTONS" className="w-full h-[5vh] flex items-center font-poppins text-white gap-3">
            <a
              href="#coding"
              className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 text-sm cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
            >
              <span className="block bg-main-color hover:bg-slate-800 rounded-full py-2 px-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                {t('watch-my-projects')}
              </span>
            </a>
            <a
              href="#"
              className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 text-sm cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
            >
              <span className="block bg-main-color hover:bg-slate-800 rounded-full py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100">
                {t('download-cv')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
