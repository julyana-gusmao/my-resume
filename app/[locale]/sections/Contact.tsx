import ContactDesktop from "./components/Contact-Desktop";
import ContactMobile from "./components/Contact-Mobile";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-8">
      {/* MOBILE */}
      <ContactMobile />

      {/* DESKTOP */}
      <ContactDesktop />

    </section>
  );
};

export default Contact;
