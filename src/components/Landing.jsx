import Navbar1 from "./Navbar";
import Hero from "./componentLandig/Hero";
import Section from "./componentLandig/oneSection";
import { Spacer } from "@nextui-org/react";

const Landing = () => {
  return (
    <>
      <Navbar1 />
      <div className="lg:mx-16 md:mx-12 mx-7">
        <Hero />
        <Spacer y={5}/>
        <Section/>
      </div>
    </>
  );
};

export default Landing;
