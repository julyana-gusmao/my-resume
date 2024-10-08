import gear from "@/gear.png";
import iconpc from "@/iconpc.png";
import DOCKER from "@/icons-skills/back/DOCKER.png";
import GIT from "@/icons-skills/back/GIT.png";
import JEST from "@/icons-skills/back/JEST.png";
import NEXT from "@/icons-skills/back/NEXT.png";
import NODE from "@/icons-skills/back/NODE.png";
import POSTGRE from "@/icons-skills/back/POSTGRE.png";
import SQL from "@/icons-skills/back/SQL.png";
import figma from "@/icons-skills/front/figma.png";
import html from "@/icons-skills/front/html.png";
import javascript from "@/icons-skills/front/javascript.png";
import photoshop from "@/icons-skills/front/photoshop.png";
import react from "@/icons-skills/front/react.png";
import tailwind from "@/icons-skills/front/tailwind.png";
import typescript from "@/icons-skills/front/typescript.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Skills = () => {
  const t = useTranslations('skills');
  
  return (
    <section id="skills" className="w-full py-8">
      {/* MOBILE */}
      <div className="lg:hidden flex flex-col gap-5 items-center text-white">
      <div id="TITLE" className="flex-col text-center">
          <h3 className="head-mobile">Skills</h3>
          <h4 className="text-details">{t('technical-knowledge')}</h4>
        </div>
        <div id="BOXES" className="flex flex-col gap-6 items-center">
          <div id="FRONT-END" className="flex flex-col gap-5 items-center w-[70vw] bg-boxes bg-opacity-50 py-7 px-12 border-stroke border-2 rounded-xl">
            <div id="TEXT E ICON" className="flex gap-3 items-center">
            <Image src={iconpc} alt={"javascript"} />
            <h5>Front-end</h5>
            </div>
            <div id="ICONES" className="flex gap-3 justify-center items-center flex-wrap w-full">
              <Image src={javascript} alt={"javascript"} width={30} />
              <Image src={typescript} alt={"typescript"} width={30} />
              <Image src={react} alt={"react"} width={38} />
              <Image src={html} alt={"html"} width={35} />
              <Image src={figma} alt={"figma"} width={30} />
              <Image src={photoshop} alt={"photoshop"} width={30} />
              <Image src={tailwind} alt={"tailwind"} width={30} />
            </div>
          </div>
          <div id="BACK-END" className="flex flex-col gap-5 items-center w-[70vw] bg-boxes bg-opacity-50 py-7 px-12 border-stroke border-2 rounded-xl">
            <div id="TEXT E ICON" className="flex gap-3 items-center">
            <Image src={gear} alt={"javascript"} />
            <h5>Back-end</h5>
            </div>
            <div id="ICONES" className="flex gap-3 justify-center items-center flex-wrap w-full">
              <Image src={NODE} alt={"NODE"} width={35} />
              <Image src={NEXT} alt={"NEXT"} width={35} />
              <Image src={POSTGRE} alt={"POSTGRE"} width={30} />
              <Image src={DOCKER} alt={"DOCKER"} width={30} />
              <Image src={SQL} alt={"SQL"} width={30} />
              <Image src={JEST} alt={"JEST"} width={35} />
              <Image src={GIT} alt={"GIT"} width={60} />
            </div>
          </div>
        </div>
      </div>

      
      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col text-white items-center gap-12">
        <div id="TITLE" className="flex-col text-center">
          <h2>Skills</h2>
          <h4 className="text-details">{t('technical-knowledge')}</h4>
        </div>
        <div id="BOXES" className="flex flex-col gap-6">
          <div id="FRONT-END" className="flex flex-col gap-5 items-center w-full bg-boxes bg-opacity-50 py-7 px-16 border-stroke border-2 rounded-xl">
            <div id="TEXT E ICON" className="flex gap-3 items-center">
            <Image src={iconpc} alt={"javascript"} />
            <h4>Front-end</h4>
            </div>
            <div id="ICONES" className="flex gap-3 w-full items-center ml-10">
              <Image src={javascript} alt={"javascript"} width={50} />
              <Image src={typescript} alt={"typescript"} width={50} />
              <Image src={react} alt={"react"} width={60} />
              <Image src={html} alt={"html"} width={55} />
              <Image src={figma} alt={"figma"} width={50} />
              <Image src={photoshop} alt={"photoshop"} width={50} />
              <Image src={tailwind} alt={"tailwind"} width={50} />
            </div>
          </div>
          <div id="BACK-END" className="flex flex-col gap-5 items-center w-full bg-boxes bg-opacity-50 py-7 px-16 border-stroke border-2 rounded-xl">
            <div id="TEXT E ICON" className="flex gap-3 items-center">
            <Image src={gear} alt={"javascript"} />
            <h4>Back-end</h4>
            </div>
            <div id="ICONES" className="flex gap-3 w-full items-center ml-5">
              <Image src={NODE} alt={"NODE"} width={55} />
              <Image src={NEXT} alt={"NEXT"} width={50} />
              <Image src={POSTGRE} alt={"POSTGRE"} width={50} />
              <Image src={DOCKER} alt={"DOCKER"} width={50} />
              <Image src={SQL} alt={"SQL"} width={50} />
              <Image src={JEST} alt={"JEST"} width={50} />
              <Image src={GIT} alt={"GIT"} width={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
