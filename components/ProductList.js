import Link from 'next/link'
import ProductCard from './ProductCard'
import { useEffect, useRef, useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { useRouter } from 'next/router'
import Products from '../context/ProductsDatabase'

export default function ProductList() {
  const router = useRouter()
  const currentPath = router.pathname
  console.log(`current path: ${currentPath}`)

  const { setLogoSize, setHeaderFixed, setLogoSubheading, setOpacity } =
    useContext(ShopContext)

  const inputRef = useRef()

  if (currentPath === '/' && inputRef.current !== null) {
    const scrollHandler = (_) => {
      const productListPosition = inputRef.current?.getBoundingClientRect()
        ? inputRef.current.getBoundingClientRect()
        : ''
      console.log(productListPosition.top)

      if (productListPosition.top < 165) {
        //top
        setHeaderFixed(' fixed hidden md:block left-0 top-0 min-w-full')
        setLogoSize(
          'mb-0 flex  hidden md:block justify-center pb-0 mx-auto w-40 mt-1 '
        )
        setLogoSubheading('hidden')
      }
      //middle
      if (productListPosition.top < 440 && 175 < productListPosition.top) {
        setHeaderFixed(' flex-col min-w-full ')
        setLogoSize('mb-0 flex justify-center pb-0 mx-auto max-w-md')
        setLogoSubheading('hidden ')
      }

      //bottom
      if (productListPosition.top > 460) {
        //Grey out cocoa roasters text
        let opacity =
          Math.floor((productListPosition.top * 10) / 969) * 0.1 - 0.3
        setOpacity(opacity)
        setHeaderFixed('fixed left-0  top-1/3 min-w-full')
        setLogoSubheading(`pl-40 mt-2 h-11 mx-auto  `)
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', scrollHandler, true)
      return () => {
        window.removeEventListener('scroll', scrollHandler, true)
      }
    }, [])
  } else {
    return
  }

  return (
    <div ref={inputRef} className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Products.map((product) => (
            <Link href={`/products/${product.href}`}>
              <a key={product.id} className="group">
                <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 h-72 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    width="150px"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
