import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ product }) => {
  console.log(product)
  const { href, price, imageSrc, imageAlt, name } = product

  return (
    <Link href={`/products/${href}`}>
      <a className="group">
        <div className="w-full overflow-hidden rounded-xl bg-gray-200">
          <div className="relative h-40 group-hover:opacity-75">
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-700">{price}</p>
      </a>
    </Link>
  )
}

export default ProductCard
