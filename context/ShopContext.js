import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import throttle from 'lodash.throttle'

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const [headerFixed, setHeaderFixed] = useState(
    'sticky left-0 top-1/3 min-w-full'
  )
  const [logoSize, setLogoSize] = useState(
    'mb-0 flex justify-center pb-0 mx-auto max-w-md'
  )
  const [logoScale, setLogoScale] = useState('')
  const [logoSubheading, setLogoSubheading] = useState(
    'pl-40 mt-2 h-11 mx-auto'
  )
  const [opacity, setOpacity] = useState('1')

  //stateless component
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 500 ? true : false)
    }
    window.addEventListener('scroll', handleScroll())
    console.log(`from stateles component: ${scroll}`)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      //default 0
      const offset = 800
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <ShopContext.Provider
      value={{
        headerFixed,
        setHeaderFixed,
        logoSize,
        setLogoSize,
        logoScale,
        setLogoScale,
        logoSubheading,
        setLogoSubheading,
        opacity,
        setOpacity,
        scroll,
        setScroll,
        hasScrolled,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContext
