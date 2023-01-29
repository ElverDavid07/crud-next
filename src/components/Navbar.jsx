import { Button, Navbar, Text } from "@nextui-org/react";
import { Caveat } from "@next/font/google";
const caveat = Caveat({ subsets: ["latin"], weight: "600" });
const Navbar1 = () => {
  return (
    <>
      {/* navbar nextUi */}
      <Navbar variant={"sticky"} disableShadow={true}>
        <Navbar.Brand>
          <Text
            b
            size={"$3xl"}
            span
            className={`${caveat.className} text-slate-800`}
          >
            {"<Dev/>"}
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Button color={"primary"} light rounded animated auto>
            registrarse
          </Button>
          <Button
            color={"gradient"}
            ghost
            rounded
            animated
            auto
            bordered
            css={{ color: "Blue" }}
            className="hover:text-white focus:text-white"
          >
            iniciar seccion
          </Button>
        </Navbar.Content>
      </Navbar>
      {/* navbar con tailwind */}
    </>
  );
};

export default Navbar1;
