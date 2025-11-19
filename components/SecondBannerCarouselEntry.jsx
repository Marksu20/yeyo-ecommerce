export default function SecondBannerCarouselEntry (props) {
  return (
    <div className="relative w-full h-[100%] md:h-[500px] lg:h-[700px]">
      <img
        src={props.image}
        className="h-full w-full object-contain bg-gray-50"
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  )
}
