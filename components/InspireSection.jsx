import models from '../dummy_data/models.js';
import ModelEntry from './ModelEntry';

const InspireSection = () => {
  const modelEntryElements = models.map((model) => {
    return (
      <ModelEntry 
        key={model.id}
        {...model} 
      />
    )
  })

  return (
    <section className="w-full bg-white py-2 sm:py-6 lg:py-10 mb-10">
      <div className="max-w-[95%] md:max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 sm:mb-2 lg:mb-4">
          <h2 className="text-md sm:text-lg lg:text-2xl font-bold text-gray-900 leading-tight">
            STYLE WITH YOUR FAVOURITE CELEBRITY
          </h2>
        </div>

        {/* md:grid-cols-2 xl:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-2 lg:gap-4">
          {modelEntryElements}
        </div>
      </div>
    </section>
  )
}

export default InspireSection
