import Image from "next/image";
import arrow from "../../public/assets/arrow.png";
import email from "../../public/assets/icons-contact/email.png";
import instagram from "../../public/assets/icons-contact/instagram.png";
import linkedin from "../../public/assets/icons-contact/linkedin.png";
import send from "../../public/assets/send.png";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-8">
      {/* MOBILE */}

      <div
        id="MOBILE"
        className="lg:hidden w-full px-8 flex flex-col items-center gap-10 whitespace-break-spaces text-white break-words text-center"
      >
        <div id="TITLE" className="flex flex-col items-center gap-2">
          <h1 className="head-mobile">Get in Touch</h1>
          <h4 className="text-details">Contact me</h4>
        </div>
        <div id="SOCIALS" className="flex flex-col gap-6">
          <h4>Talk to me</h4>
          <div
            id="box-email"
            className="flex flex-col gap-2 items-center justify-center bg-boxes border-2 border-stroke rounded-xl p-3 w-[75vw] bg-opacity-50"
          >
            <Image src={email} alt={"email"} />
            <p>Email</p>
            <p className="text-details">julyanagcneiva@gmail.com</p>
            <div
              id="BUTTON"
              className="h-full w-full mt-2 items-center justify-center flex gap-2"
            >
              <p className="text-details hover:text-white">
                <a href="mailto:julyanagcneiva@gmail.com">Write me</a>
              </p>
              <Image src={arrow} alt={"arrow"} />
            </div>
          </div>
          <div
            id="box-linkedin"
            className="flex flex-col gap-2 items-center justify-center bg-boxes border-2 border-stroke rounded-xl p-3 w-[75vw] bg-opacity-50"
          >
            <Image src={linkedin} alt={"linkedin"} />
            <p>Linkedin</p>
            <p className="text-details">Julyana 'Kira' Gusmão</p>
            <div
              id="BUTTON"
              className="h-full w-full mt-2 items-center justify-center flex gap-2"
            >
              <p className="text-details hover:text-white">
                <a href="https://www.linkedin.com/in/julyana-gusmao/">
                  Write me
                </a>
              </p>
              <Image src={arrow} alt={"arrow"} />
            </div>
          </div>
          <div
            id="box-Instagram"
            className="flex flex-col gap-2 items-center justify-center bg-boxes border-2 border-stroke rounded-xl p-3 w-[75vw] bg-opacity-50"
          >
            <Image src={instagram} alt={"Instagram"} />
            <p>Instagram</p>
            <p className="text-details">@the2kira</p>
            <div
              id="BUTTON"
              className="h-full w-full mt-2 items-center justify-center flex gap-2"
            >
              <p className="text-details hover:text-white">
                <a href="https://www.instagram.com/the2kira">Write me</a>
              </p>
              <Image src={arrow} alt={"arrow"} />
            </div>
          </div>
        </div>
        <div id="FORM" className="flex flex-col gap-3 mt-10">
          <h4>Write me your project</h4>
          <form className="text-details flex flex-col gap-3 w-[80vw]">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Insert your name"
                className="w-full bg-transparent border-2 border-stroke rounded-xl p-3 placeholder-details"
              ></input>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Insert your email"
                className="w-full bg-transparent border-2 border-stroke rounded-xl p-3 placeholder-details"
              ></input>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="message">Message</label>
              <textarea className="w-full bg-transparent border-2 border-stroke rounded-xl p-3 h-[15vh] placeholder-details text-start align-text-top"></textarea>
            </div>
            <button className="mt-2 flex gap-3 p-5 items-center justify-center w-[45vw] bg-gradient-to-tr from-linear-l to-linear-r rounded-xl text-white">
              <p>Send Message</p>
              <Image src={send} alt={"send button"} />
            </button>
          </form>
        </div>
      </div>

      {/* DESKTOP */}

      <div
        id="DESKTOP"
        className="hidden lg:flex flex-col w-full px-40 py-8 items-center gap-10 whitespace-break-spaces text-white break-words text-center"
      >
        <div id="TITLE" className="flex flex-col items-center gap-2">
          <h1 className="head-mobile">Get in Touch</h1>
          <h4 className="text-details">Contact me</h4>
        </div>
        <div id="DIVISOR FLEX" className="flex gap-20 items-start">
          <div id="SOCIALS" className="flex flex-col gap-6">
            <h4>Talk to me</h4>
            <div
              id="box-email"
              className="flex flex-col gap-2 items-center justify-center bg-boxes border-2 border-stroke rounded-xl p-3 w-[25vw] bg-opacity-15"
            >
              <Image src={email} alt={"email"} />
              <p>Email</p>
              <p className="text-details">julyanagcneiva@gmail.com</p>
              <div
                id="BUTTON"
                className="h-full w-full mt-2 items-center justify-center flex gap-2"
              >
                <p className="text-details hover:text-white">
                  <a href="mailto:julyanagcneiva@gmail.com">Write me</a>
                </p>
                <Image src={arrow} alt={"arrow"} />
              </div>
            </div>
            <div
              id="box-linkedin"
              className="flex flex-col gap-2 items-center justify-center bg-boxes border-2 border-stroke rounded-xl p-3 w-[25vw] bg-opacity-15"
            >
              <Image src={linkedin} alt={"linkedin"} />
              <p>Linkedin</p>
              <p className="text-details">Julyana 'Kira' Gusmão</p>
              <div
                id="BUTTON"
                className="h-full w-full mt-2 items-center justify-center flex gap-2"
              >
                <p className="text-details hover:text-white">
                  <a href="https://www.linkedin.com/in/julyana-gusmao/">
                    Write me
                  </a>
                </p>
                <Image src={arrow} alt={"arrow"} />
              </div>
            </div>
            <div
              id="box-Instagram"
              className="flex flex-col gap-2 items-center justify-center bg-boxes border-2 border-stroke rounded-xl p-3 w-[25vw] bg-opacity-15"
            >
              <Image src={instagram} alt={"Instagram"} />
              <p>Instagram</p>
              <p className="text-details">@the2kira</p>
              <div
                id="BUTTON"
                className="h-full w-full mt-2 items-center justify-center flex gap-2"
              >
                <p className="text-details hover:text-white">
                  <a href="https://www.instagram.com/the2kira">Write me</a>
                </p>
                <Image src={arrow} alt={"arrow"} />
              </div>
            </div>
          </div>
          <div id="FORM" className="flex flex-col gap-3">
            <h4>Write me your project</h4>
            <form className="text-details flex flex-col gap-6 w-[28vw]">
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="name">Name</label>
                <input
                  placeholder="Insert your name"
                  className="w-full bg-transparent border-2 border-stroke rounded-xl p-4 placeholder-details"
                ></input>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Insert your email"
                  className="w-full bg-transparent border-2 border-stroke rounded-xl p-4 placeholder-details"
                ></input>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="message">Message</label>
                <textarea className="w-full bg-transparent border-2 border-stroke rounded-xl p-4 h-[26vh] placeholder-details text-start align-text-top"></textarea>
              </div>
              <button className="mt-2 flex gap-3 p-5 items-center justify-center w-[14vw] bg-gradient-to-tr from-linear-l to-linear-r rounded-xl text-white">
                <p>Send Message</p>
                <Image src={send} alt={"send button"} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
