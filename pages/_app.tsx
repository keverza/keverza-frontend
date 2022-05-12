import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShopProvider } from '../context/ShopContext'
import { useEffect } from 'react'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    UIkit.use(Icons)
  })
  return (
    <ShopProvider>
      <Component {...pageProps} />
    </ShopProvider>
  )
}

export default MyApp
