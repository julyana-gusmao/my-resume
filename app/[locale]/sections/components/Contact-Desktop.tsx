import arrow from "@/arrow.png";
import emailImg from "@/icons-contact/email.png";
import instagram from "@/icons-contact/instagram.png";
import linkedin from "@/icons-contact/linkedin.png";
import send from "@/send.png";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

function ContactDesktop() {
    const t = useTranslations("contact");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => setShowError(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showError, setShowError]);

    function sendEmail(e: any) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            setShowError(true);
            return;
        }

        setShowError(false);

        type TemplateParams = {
            from_name: string;
            message: string;
            email: string;
        };

        const templateParams: TemplateParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs
            .send(
                "service_80rsb5g",
                "template_di7gx2q",
                templateParams,
                "JQNNXb8maa563r2l6"
            )
            .then(
                (response) => {
                    setShowSuccessMessage(true)
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (err) => {
                    console.log("ERRO: ", err);
                }
            );
    }

    const fadeInMessage = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    }

    return (
<div
        id="DESKTOP"
        className="hidden lg:flex flex-col w-full px-40 py-8 items-center gap-10 whitespace-break-spaces text-white break-words text-center"
      >
        <div id="TITLE" className="flex flex-col items-center gap-2">
          <h1 className="head-mobile">{t("GetInTouch")}</h1>
          <h4 className="text-details">{t("contact-me")}</h4>
        </div>
        <div id="DIVISOR FLEX" className="flex gap-20 items-start">
          <div id="SOCIALS" className="flex flex-col gap-6">
            <h4>{t("talk-to-me")}</h4>
            <div
              id="box-email"
              className="flex flex-col gap-2 items-center justify-center bg-boxes border-2 border-stroke rounded-xl p-3 w-[25vw] bg-opacity-15"
            >
              <Image src={emailImg} alt={"email"} />
              <p>Email</p>
              <p className="text-details">julyanagcneiva@gmail.com</p>
              <div
                id="BUTTON"
                className="h-full w-full mt-2 items-center justify-center flex gap-2"
              >
                <p className="text-details hover:text-white">
                  <a href="mailto:julyanagcneiva@gmail.com">{t("write-me")}</a>
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
                    {t("write-me")}
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
                  <a href="https://www.instagram.com/the2kira">
                    {t("write-me")}
                  </a>
                </p>
                <Image src={arrow} alt={"arrow"} />
              </div>
            </div>
          </div>
          <div id="FORM" className="flex flex-col gap-3">
            <h4>{t("write-project")}</h4>
            <form
              onSubmit={sendEmail}
              className="text-details flex flex-col gap-6 w-[28vw]"
            >
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="name">{t("name")}</label>
                <input
                  key="name-input"
                  value={name}
                  minLength={2}
                  maxLength={50}
                  placeholder={t("input-name")}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-2 border-stroke rounded-xl p-4 placeholder-details"
                ></input>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="email">Email</label>
                <input
                  key="email-input"
                  value={email}
                  minLength={2}
                  maxLength={50}
                  placeholder={t("input-email")}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-2 border-stroke rounded-xl p-4 placeholder-details"
                ></input>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="message">{t("message")}</label>
                <textarea
                  key="message-input"
                  value={message}
                  minLength={10}
                  maxLength={240}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-2 border-stroke rounded-xl p-4 h-[26vh] placeholder-details text-start align-text-top"
                ></textarea>
              </div>
              {showError && (
                <motion.div
                  variants={fadeInMessage}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  <p className="text-red-500">Por favor, preencha todos os campos obrigatórios.</p>
                </motion.div>
              )}
              {showSuccessMessage && (
                <motion.div
                  variants={fadeInMessage}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  <p className="text-green-500">Email enviado com sucesso!<br /> Em breve retornarei o seu contato :)</p>
                </motion.div>
              )}

              {!showSuccessMessage && (
                <button
                  type="submit"
                  className="mt-2 flex gap-3 p-5 items-center justify-center w-[14vw] bg-gradient-to-tr from-linear-l to-linear-r rounded-xl text-white"
                >
                  <p>{t("message-button")}</p>
                  <Image src={send} alt={"send button"} />
                </button>
              )}

            </form>
          </div>
        </div>
      </div>
    )
}

export default ContactDesktop
