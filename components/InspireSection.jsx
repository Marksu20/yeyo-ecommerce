import models from '../dummy_data/models.js';
import ModelCarousel from './ModelCarousel';

const InspireSection = () => {

  return (
    <section className="w-full bg-white pt-3 mb-5 lg:py-10 ">
      <div className="max-w-[100%] sm:max-w-[100%] md:max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3 lg:mb-4">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 leading-tight">
            STYLE WITH YOUR FAVOURITE CELEBRITY
          </h2>
        </div>

        {/* <div className="grid grid-cols-4 gap-2 sm:grid-cols-3 sm:gap-2 lg:grid-cols-4 lg:gap-4">
          {modelEntryElements}  
        </div> */}
        <ModelCarousel />

      </div>
    </section>
  )
}

export default InspireSection
