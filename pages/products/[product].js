import HeaderStatic from '../../components/HeaderStatic'
import Products from '../../context/ProductsDatabase'
import Footer from '../../components/Footer'
import Link from 'next'
import RecommendedList from '../../components/RecommendedList'

export default function ProductPage({ product }) {
  const features = product.features
  const { price, imageSrc, imageAlt, name, story } = product
  return (
    <>
      <HeaderStatic />

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {name}
            </h2>
            <p className="mt-4 text-gray-500">{story}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg bg-gray-100"
            />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg bg-gray-100"
            />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg bg-gray-100"
            />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
      <RecommendedList current={product.id} products={Products} />
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = Products.map((item) => {
    const handle = item.href.toString()
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
  return {
    props: { product: Products.find((produ) => produ.href === params.product) },
  }
}
