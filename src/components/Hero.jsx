import { Button, Spacer } from "@nextui-org/react";
import { Josefin_Sans } from "@next/font/google";
import { useRouter } from "next/router";
import Img from 'next/legacy/image'

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" });
const Hero = () => {
  const router = useRouter();
  return (
    <>
      <Spacer y={3} />
      <div className="flex flex-col gap-y-16 lg:gap-y-0 lg:flex-row lg:justify-between  relative w-full">
        <h3
          className={`${josefin.className} font-bold text-slate-700 text-7xl`}
        >
          Sistema de Crud para gestionar libros
        </h3>
        <Img
          src="/hero.svg"
          alt="hero icon"
          width={600}
          height={670}
        
          className="lg:pr-5 mx-auto mt-8"
        />
      </div>
      <Button
        bordered
        ghost
        animated={true}
        size={"lg"}
        onPress={() => {
          router.push("/dasboard");
        }}
        className="absolute bottom-40 left-8"
      >
        empezar
      </Button>

      <div className="lg:flex hidden ml-20  -space-x-4 absolute -bottom-10">
        <div className="w-32 h-32 bg-blue-600   mix-blend-multiply -z-[1px] rounded-full blur-3xl" />
        <div className="w-28 h-28 bg-indigo-600 mix-blend-multiply blur-3xl -z-[1px]" />
      </div>
    </>
  );
};

export default Hero;
