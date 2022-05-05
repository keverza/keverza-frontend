export default function ProductCard({ number, region, name }) {
  return (
    <figure className="hover:z-100 box-border  outline-pink-100 hover:outline ">
      <h1 className="flex h-64 flex-col-reverse p-2 text-right text-3xl text-gray-50">
        {number}
      </h1>
      <div className="flex h-64  flex-col-reverse bg-gray-500 text-center ">
        <p>{name}</p>
        <h3 className="text-lg font-semibold"> {region}</h3>
      </div>
    </figure>
  )
}
