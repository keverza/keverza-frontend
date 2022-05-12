export default function ProductFeature() {
  return (
    <div className="flex min-h-screen flex-col  items-center justify-center  bg-white">
      <div className="p-2">
        <h2
          uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;"
          className="max-w-lg text-center text-2xl font-light"
        >
          Kiekviena mūsų šokolado gabalėlis tai naujas atradimas ir galimybė
          pažinti tolimą žemyną.
        </h2>
      </div>
    </div>
  )
}
