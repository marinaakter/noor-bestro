import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "../../utils/cn";

function GuestNotesCarousel({ notes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? notes.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === notes.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const timer = window.setInterval(goToNext, 6500);
    return () => window.clearInterval(timer);
  }, [notes.length]);

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -70) {
      goToNext();
    }

    if (info.offset.x > 70) {
      goToPrevious();
    }
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={goToPrevious}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-wine shadow-[0_10px_22px_rgba(31,31,31,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-wine hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          aria-label="Previous guest note"
          title="Previous guest note"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-wine shadow-[0_10px_22px_rgba(31,31,31,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-wine hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          aria-label="Next guest note"
          title="Next guest note"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-5 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {notes.map((note) => (
            <div key={note.name} className="min-w-full px-0.5">
              <article className="premium-card grid min-h-[26rem] items-stretch overflow-hidden md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-72 overflow-hidden md:min-h-full">
                  <img src={note.image} alt={note.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-wine/60 via-brand-wine/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex gap-1 text-brand-light">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
                  <Quote className="text-brand-red/70" size={38} />
                  <p className="mt-8 max-w-3xl font-display text-3xl leading-tight text-brand-heading sm:text-4xl lg:text-[2.9rem]">
                    {note.quote}
                  </p>
                  <div className="mt-10 border-t border-brand-border pt-6">
                    <h3 className="text-2xl">{note.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.14em] text-brand-muted">{note.title}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {notes.map((note, index) => (
          <button
            key={note.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
              activeIndex === index ? "w-9 bg-brand-red" : "w-2.5 bg-brand-border hover:bg-brand-wine/50"
            )}
            aria-label={`Show guest note from ${note.name}`}
            title={`Show guest note from ${note.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default GuestNotesCarousel;
