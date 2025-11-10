export default function HotEntry(props) {
  return (
    <div className="group flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-2 rounded-lg">
        <img
          src={props.img.src}
          alt={props.img.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-md sm:text-md font-semibold text-gray-900">
          {props.title}
        </h3>
        <p className="text-xs text-gray-600 mb-2 flex-grow">
          {props.details}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {/* <span className="text-base sm:text-md font-bold text-gray-900">
            {product.price}
          </span> */}
          <a
            href={props.link}
            className="border-b-1 text-black text-sm md:text-xs font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  )
}