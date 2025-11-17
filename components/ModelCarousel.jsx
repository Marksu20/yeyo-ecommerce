import { useRef, useState, useEffect } from 'react';

export default function Carousel({ items = [], visible = 4, renderItem }) {
  const scrollerRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      // allow controls only when total items exceed visible slots
      setCanScroll(items.length > visible && el.scrollWidth > el.clientWidth + 1);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [items.length, visible]);

  const getSlideWidth = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const first = el.querySelector('[data-slide]');
    return first ? first.offsetWidth : Math.floor(el.clientWidth / visible);
  };

  const scrollBySlides = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getSlideWidth();
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {canScroll && (
        <button
          aria-label="Previous"
          onClick={() => scrollBySlides(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 bg-white/90 text-black rounded-full shadow-md hover:bg-white"
        >
          ‹
        </button>
      )}

      <div
        ref={scrollerRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-2"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {items.map((item, idx) => (
          <div
            data-slide
            key={item.id ?? idx}
            className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 snap-start"
          >
            {renderItem ? (
              renderItem(item, idx)
            ) : (
              <img
                src={item.src ?? item.img?.src}
                alt={item.alt ?? item.img?.alt ?? ''}
                className="w-full h-full object-contain bg-gray-50"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {canScroll && (
        <button
          aria-label="Next"
          onClick={() => scrollBySlides(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 bg-white/90 text-black rounded-full shadow-md hover:bg-white"
        >
          ›
        </button>
      )}
    </div>
  );
}