export default function ModelEntry(props) {
  return (
    <div className="relative overflow-hidden w-full">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="h-full w-full object-contain bg-gray-50"
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  )
};