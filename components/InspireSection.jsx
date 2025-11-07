import React from 'react'

const InspireSection = () => {
  const looks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1600&q=80&auto=format&fit=crop'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1600&q=80&auto=format&fit=crop'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1600&q=80&auto=format&fit=crop'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1600&q=80&auto=format&fit=crop'
    }
  ]

  return (
    <section className="w-full bg-white py-2 sm:py-6 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 sm:mb-2 lg:mb-4">
          <h2 className="text-md sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            STYLE WITH YOUR FAVOURITE CELEBRITY
          </h2>
        </div>

        {/* md:grid-cols-2 xl:grid-cols-4 */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {looks.map((look) => (
            <article
              key={look.id}
              className="relative overflow-hidden" 
            >
            {/* h-[340px] sm:h-[380px] md:h-[420px] xl:h-[460px] */}

              <img
                src={look.image}
                alt="Model portrait"
                className="h-full w-full object-scale-down"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InspireSection
