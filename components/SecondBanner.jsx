import React, { useState } from 'react'

const SecondBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Banner data - easily customizable
  const bannerData = [
    {
      id: 1,
      title: "NEW COLLECTION",
      subtitle: "Run the Streets",
      description: "Performance meets style. Discover our latest athletic footwear.",
      buttonText: "Shop Now",
      buttonLink: "#",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
      imageMobile: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      textPosition: "left", // 'left', 'center', 'right'
      backgroundColor: "bg-gray-900",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "SUMMER SALE",
      subtitle: "Up to 50% Off",
      description: "Gear up for summer with our biggest sale of the year.",
      buttonText: "Explore Deals",
      buttonLink: "#",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=80",
      imageMobile: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
      textPosition: "center",
      backgroundColor: "bg-blue-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "PREMIUM QUALITY",
      subtitle: "Built to Last",
      description: "Experience unmatched comfort and durability.",
      buttonText: "Learn More",
      buttonLink: "#",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=1600&q=80",
      imageMobile: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&q=80",
      textPosition: "right",
      backgroundColor: "bg-black",
      textColor: "text-white"
    }
  ]

  const currentBanner = bannerData[currentSlide]

  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
        {/* Background Image - Desktop */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{ backgroundImage: `url(${currentBanner.image})`}}
        >
          <div className={`absolute inset-0 ${currentBanner.backgroundColor} opacity-60`}></div>
        </div>

        {/* Background Image - Mobile */}
        <div 
          className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{
            backgroundImage: `url(${currentBanner.imageMobile})`
          }}
        >
          <div className={`absolute inset-0 ${currentBanner.backgroundColor} opacity-60`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className={`flex flex-col justify-center h-full ${
              currentBanner.textPosition === 'left' ? 'items-start text-left' :
              currentBanner.textPosition === 'center' ? 'items-center text-center' :
              'items-end text-right'
            }`}>
              {/* Title */}
              <h3 className={`text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-2 ${currentBanner.textColor}`}>
                {currentBanner.title}
              </h3>
              
              {/* Subtitle */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 ${currentBanner.textColor}`}>
                {currentBanner.subtitle}
              </h1>
              
              {/* Description */}
              <p className={`text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-md ${
                currentBanner.textPosition === 'center' ? 'mx-auto' : ''
              } ${currentBanner.textColor} opacity-90`}>
                {currentBanner.description}
              </p>
              
              {/* CTA Button */}
              <a
                href={currentBanner.buttonLink}
                className={`inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold text-sm sm:text-base uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 ${currentBanner.textPosition === 'center' ? 'mx-auto' : ''}`}
              >
                {currentBanner.buttonText}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SecondBanner

