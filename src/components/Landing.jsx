import Navbar1 from "./Navbar";
import Hero from "./Hero";
import { Spacer } from "@nextui-org/react";

const Landing = () => {
  return (
    <>
      <Navbar1 />
      <div className="lg:mx-16 md:mx-12 mx-7">
        <Hero />
        <Spacer y={5}/>
      </div>
    </>
  );
};

export default Landing;
