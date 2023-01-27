import Navbar1 from './Navbar'
import Img from 'next/legacy/image'
import { useRouter } from 'next/router'
import { Text, Grid, Container,Spacer } from '@nextui-org/react'

const Landing = () => {
  const router = useRouter()
  return (
    <>
      <Navbar1 /> 
        <div className='mt-7 flex justify-between flex-col md:flex-col lg:flex-row mx-2'>
        <div className=' w-[650px] mt-20'>
          <h2 className='text-slate-800 font-bold text-5xl'>Aplicacion<span className='bg-gradient-to-t from-purple-500  to-pink-400 bg-clip-text text-transparent'>Web</span>contruida con next js </h2>
        </div>
        <div className='pt-5 lg:pt-0'>
        {/* <Img src="/icon.svg" alt="icon" width="406" height="306"/> */}
        </div>
        </div>




    </>
  )
}

export default Landing



