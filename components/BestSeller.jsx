import React from 'react'

const BestSeller = () => {
  const products = [
    {
      id: 1,
      title: 'Ultraboost 23',
      details: 'Premium running shoes with responsive cushioning',
      price: '$180',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Air Max 270',
      details: 'Maximum air cushioning for all-day comfort',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Classic Sneakers',
      details: 'Timeless design meets modern comfort',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Pro Performance',
      details: 'Elite athletes choice for peak performance',
      price: '$200',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80&auto=format&fit=crop',
      link: '#'
    }
  ]

  return (
    <section className="w-full bg-white py-2 sm:py-6 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-2 sm:mb-2 lg:mb-4">
          <h2 className="text-md sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight text-center">
            WHAT'S HOT
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-2 rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-md sm:text-md font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2 flex-grow">
                  {product.details}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-base sm:text-md font-bold text-gray-900">
                    {product.price}
                  </span>
                  <a
                    href={product.link}
                    className="border-b-1 text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSeller
