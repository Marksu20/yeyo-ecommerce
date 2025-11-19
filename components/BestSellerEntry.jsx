export default function BestSellerEntry(props) {
  return (
    <div className="relative overflow-hidden w-full">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="h-full w-full object-contain bg-gray-50"
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div>
        <span className="text-sm font-bold text-gray-900">P100</span> <br />
        <span className="text-sm text-gray-600">Item Name</span>
      </div>
    </div>
  )
};