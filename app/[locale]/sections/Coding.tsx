import CodingDesktop from "./components/Coding-Desktop";
import CodingMobile from "./components/Coding-Mobile";

const Coding = () => {
  return (
    <section id="coding" className="text-white w-full">
      
      {/* MOBILE */}
      <CodingMobile />

      {/* DESKTOP */}
      <CodingDesktop />

    </section>
  );
};

export default Coding;
