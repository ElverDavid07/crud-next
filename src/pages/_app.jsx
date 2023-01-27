import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { NextUIProvider } from '@nextui-org/react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="description" content="aplicacion de next.js consumiendo una api y haciendo un crud" />
      <title>next-app</title>
    </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  )
}
