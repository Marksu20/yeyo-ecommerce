import HotEntry from './HotEntry'
import hots from '../dummy_data/hots.js'  
const BestSeller = () => {
  const hotEntryElements = hots.map((hot) => {
    return (
      <HotEntry
        key={hot.id}
        {...hot}
      />
    )
  })

  return (
    <section className="w-full bg-white py-2 sm:py-6 lg:py-10">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-2 sm:mb-2 lg:mb-4">
          <h2 className="text-md sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight text-center">
            WHAT'S HOT
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {hotEntryElements}
        </div>
      </div>
    </section>
  )
}

export default BestSeller
