import ShopContext from '../../context/ShopContext'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Products from '../../context/ProductsDatabase'
import Link from 'next'
import {
  getAllProductsIds,
  getProductData,
  getAllProducts,
  getProduct,
} from '../../lib/products'

export default function ProductPage({ product }) {
  const { products } = useContext(ShopContext)
  const router = useRouter()
  // const { product } = router.query
  // console.log(product)
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">{product.name}</h2>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a key={product.id} className="group">
          <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
            <img
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
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = Products.map((item) => {
    const handle = item.href.toString()
    console.log(`handle: ${handle}`)
    return {
      params: { product: handle },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log({ params })
  return {
    props: { product: Products.find((produ) => produ.href === params.product) },
  }
}
