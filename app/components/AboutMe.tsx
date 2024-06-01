import Image from "next/image";
import photo from "../../public/assets/about-image.png";
import certificate from "../../public/assets/certificate.png";
import icon from "../../public/assets/icon.png";
import projects from "../../public/assets/done.png";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="text-white w-full">
      
      {/* MOBILE */}

      <div className="lg:hidden flex flex-col w-full items-center py-4">
        <div id="CONTAINER RIGHT" className="flex flex-col items-center gap-7">
          <div id="TEXT" className="flex flex-col gap-3 font-poppins items-center">
            <h2 className="font-semibold head-mobile">Sobre Mim</h2>
            <p className="text-base text-center font-regular tracking-normal leading-7 w-[75vw]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              necessitatibus modi omnis magni praesentium earum, explicabo,
              incidunt animi dolore voluptates aspernatur laborum nihil
              blanditiis architecto aut, et autem quam est? Rerum necessitatibus
              modi omnis magni praesentium earum, explicabo, incidunt animi
              dolore voluptates aspernatur laborum nihil blanditiis architecto
              autiqwoidso qweiqueio nsdfdsk iqwoidso qweiqueio nsdfdsiqwoidso
              qweiqueio nsdfds
            </p>
          </div>
          <div id="BOXES ABOUT" className="flex gap-3 w-[80vw]">
            <div
              id="BOX-EXPERIENCIA"
              className="flex flex-col gap-2 items-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-20 py-2 px-2"
            >
              <Image src={certificate} alt={"experiencia"} width={24} />
              <h5>Experiência</h5>
              <p className="text-details text-sm">3+ Anos</p>
            </div>
            <div
              id="BOX-PROJETOS"
              className="flex flex-col gap-2 items-center text-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-20 py-2 px-4"
            >
              <Image src={projects} alt={"projetos"} width={22} />
              <h5>Projetos</h5>
              <p className="text-details text-sm">15+ Entregas</p>
            </div>
            <div
              id="BOX-ICON"
              className="flex flex-col gap-2 items-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-20 py-2 px-2"
            >
              <Image src={icon} alt={"naosei"} width={24} />
              <h5>Nao sei</h5>
              <p className="text-details text-sm">Nao sei</p>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}

      <div className="hidden w-full lg:flex justify-around gap-40 items-center px-60 py-16">
        <div id="CONTAINER LEFT">
          <div id="PHOTO">
            <Image src={photo} alt={"photo"} width={500} />
          </div>
        </div>
        <div id="CONTAINER RIGHT" className="flex flex-col items-center gap-7">
          <div id="TEXT" className="flex flex-col gap-3 font-poppins w-[30vw]">
            <h2 className="font-semibold">Sobre Mim</h2>
            <p className="text-base font-regular tracking-normal leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              necessitatibus modi omnis magni praesentium earum, explicabo,
              incidunt animi dolore voluptates aspernatur laborum nihil
              blanditiis architecto aut, et autem quam est? Rerum necessitatibus
              modi omnis magni praesentium earum, explicabo, incidunt animi
              dolore voluptates aspernatur laborum nihil blanditiis architecto
              autiqwoidso qweiqueio nsdfdsk iqwoidso qweiqueio nsdfdsiqwoidso
              qweiqueio nsdfds
            </p>
          </div>
          <div id="BOXES ABOUT" className="flex gap-3 w-full">
            <div
              id="BOX-EXPERIENCIA"
              className="flex flex-col gap-2 items-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-30 
          py-4"
            >
              <Image src={certificate} alt={"experiencia"} width={24} />
              <h4>Experiência</h4>
              <p className="text-details">3+ Anos</p>
            </div>
            <div
              id="BOX-PROJETOS"
              className="flex flex-col gap-2 items-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-30 
          py-4"
            >
              <Image src={projects} alt={"projetos"} width={22} />
              <h4>Projetos</h4>
              <p className="text-details">15+ Entregas</p>
            </div>
            <div
              id="BOX-ICON"
              className="flex flex-col gap-2 items-center w-full border-stroke border-2 rounded-xl bg-boxes bg-opacity-30 py-4"
            >
              <Image src={icon} alt={"naosei"} width={24} />
              <h4>Nao sei</h4>
              <p className="text-details">Nao sei</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
