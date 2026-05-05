import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

function GuestNotesCarousel({ notes }) {
  const movingNotes = [...notes, ...notes];

  return (
    <div className="mt-9 overflow-hidden">
      <div className="pointer-events-none absolute left-0 z-10 hidden h-64 w-24 bg-gradient-to-r from-brand-bg to-transparent lg:block" />
      <div className="pointer-events-none absolute right-0 z-10 hidden h-64 w-24 bg-gradient-to-l from-brand-bg to-transparent lg:block" />
      <div className="overflow-hidden py-1">
        <motion.div
          className="flex w-max gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          drag="x"
          dragConstraints={{ left: -900, right: 0 }}
          dragElastic={0.08}
        >
          {movingNotes.map((note, index) => (
            <article key={`${note.name}-${index}`} className="premium-card grid h-60 w-[20rem] shrink-0 grid-rows-[5rem_1fr] sm:w-[26rem]">
              <div className="grid grid-cols-[5.5rem_1fr] border-b border-brand-border/80">
                <img src={note.image} alt={note.imageAlt} className="h-20 w-full object-cover" />
                <div className="flex items-center justify-between gap-4 px-5">
                  <div>
                    <h3 className="text-xl leading-tight">{note.name}</h3>
                    <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-brand-muted">{note.title}</p>
                  </div>
                  <Quote className="hidden shrink-0 text-brand-red/65 sm:block" size={26} />
                </div>
              </div>

              <div className="flex flex-col justify-between p-5">
                <p className="text-sm leading-7 text-brand-text/95 sm:text-[0.95rem]">{note.quote}</p>
                <div className="mt-4 flex gap-1 text-brand-red/80">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default GuestNotesCarousel;
