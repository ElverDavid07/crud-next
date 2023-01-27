import { Button, Navbar, Text } from '@nextui-org/react'
import Img from 'next/image'
import { useRouter } from 'next/router'
import {Source_Sans_Pro} from '@next/font/google'
const sans = Source_Sans_Pro({subsets:"latin",weight:"600",display:"swap"})
const Navbar1 = () => {
  const router = useRouter()
  return (
    <>
      {/* navbar nextUi */}
        <Navbar variant={'sticky'} disableShadow={true}>
        <Navbar.Brand>
          <Text b size={'$3xl'} span className={ `${sans.className} text-slate-800`}>{"<Dev/>"}</Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Button color={"primary"} light rounded animated auto>registrarse</Button>
          <Button onClick={() => { router.push("/dasboard") }} color={"gradient"} ghost rounded animated auto bordered css={{ color: "Blue" }} className="hover:text-white focus:text-white">iniciar seccion</Button>
        </Navbar.Content>
      </Navbar>
      {/* navbar con tailwind */}

    {/*   <nav className='lg:flex justify-between items-center  lg:space-y-3 sticky top-0 z-20 space-y-10'>
        <Text b h3  span className='font-cursive text-center lg:text-start text-4xl text-gray-800'>{"<dev/>"}</Text>
        <div className='flex lg:flex-row flex-col items-center gap-2'>
          <Button color={'primary'} light rounded animated auto>registrarse</Button>
          <Button onClick={() => { router.push("/dasboard") }} color={"gradient"} shadow ghost rounded animated auto bordered css={{ color: "blue" }} className="hover:text-white focus:text-white">iniciar seccion</Button>
        </div>
      </nav> */}



    </>
  )
}

export default Navbar1