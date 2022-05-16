import RecommendedCard from './RecommendedCard'

function RecommendedList({ products, current }) {
  return (
    <div className="bg-white px-4">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
          Siūlome išbandyti:
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="gap-y10 grid grid-cols-2 justify-center gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
          {products.map((product) =>
            product.id === current ? null : (
              <>
                <RecommendedCard key={product.id} product={product} />
              </>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default RecommendedList
