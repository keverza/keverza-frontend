import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShopProvider } from '../context/ShopContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>
      <Component {...pageProps} />
    </ShopProvider>
  )
}

export default MyApp
