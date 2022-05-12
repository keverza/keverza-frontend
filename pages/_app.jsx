import '../styles/globals.css'

import { ShopProvider } from '../context/ShopContext'
import { useEffect } from 'react'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

function MyApp({ Component, pageProps }) {
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
