import { createContext, useState, useEffect } from 'react'

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const [headerFixed, setHeaderFixed] = useState(
    'fixed left-0 top-1/3 min-w-full sm:'
  )
  const [logoSize, setLogoSize] = useState(
    'mb-0 flex justify-center pb-0 mx-auto max-w-md'
  )
  const [logoScale, setLogoScale] = useState('')
  const [logoSubheading, setLogoSubheading] = useState(
    'pl-40 mt-2 h-11 mx-auto'
  )
  const [opacity, setOpacity] = useState('1')

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
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContext
