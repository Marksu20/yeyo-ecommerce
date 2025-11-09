import React from 'react'

const InspireSection = () => {
  const looks = [
    {
      id: 1,
      image: '../image_models/model.avif'
    },
    {
      id: 2,
      image: '../image_models/model.avif'
    },
    {
      id: 3,
      image: '../image_models/model.avif'
    },
    {
      id: 4,
      image: '../image_models/model.avif'
    }
  ]

  return (
    <section className="w-full bg-white py-2 sm:py-6 lg:py-10">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 sm:mb-2 lg:mb-4">
          <h2 className="text-md sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            STYLE WITH YOUR FAVOURITE CELEBRITY
          </h2>
        </div>

        {/* md:grid-cols-2 xl:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
          {looks.map((look) => (
            <div
              key={look.id}
              className="relative overflow-hidden w-full" 
            >
            
              <img
                src={look.image}
                alt="Model portrait"
                className="h-full w-full object-contain bg-gray-50"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InspireSection
