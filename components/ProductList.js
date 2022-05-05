import Link from 'next/link'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <main className="flex justify-between pr-2 ">
      <div className="w-2/5 flex-initial"></div>

      <div className="flex grow flex-col">
        <div className=" ">
          <div className="flex max-w-screen-sm grow justify-center ">
            <div className="  basis-1/2 border-r-2 border-l-2 border-red-50">
              <div className="">
                <div className="h-64 "></div>

                <ProductCard
                  region="Madgascar"
                  name="Kokoa Kamily"
                  number="02"
                />
                <ProductCard
                  region="Tanzania"
                  name="Kokoa Kamily"
                  number="04"
                />
                <ProductCard
                  region="Guatemala"
                  name="Kokoa Kamily"
                  number="06"
                />
              </div>
            </div>

            <div className="basis-1/2 border-r-2 border-red-50">
              <div className=" ">
                <ProductCard
                  region="Colombia"
                  name="Kokoa Kamily"
                  number="01"
                />
                <ProductCard region="Costa Rica" name="Kokoa " number="03" />
                <ProductCard
                  region="Madgascar"
                  name="Kokoa Kamily"
                  number="05"
                />
                <ProductCard
                  region="Madgascar"
                  name="Kokoa Kamily"
                  number="07"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="h-64 max-w-screen-sm content-center border-x-2 ">
          <div className="flex flex-col px-2 pt-5 text-2xl text-gray-600">
            <p className="place-self-center self-center text-center">
              Daugiau produktų jau greitai
            </p>
            <p className="place-self-center self-center">... </p>
          </div>
        </section>
      </div>

      <div className="">cart</div>
    </main>
  )
}
