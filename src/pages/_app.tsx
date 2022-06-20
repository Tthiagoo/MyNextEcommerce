import './styles.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { CartProvider } from '../context/CartContext'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <CartProvider>
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </CartProvider>
  )
}

export default MyApp
