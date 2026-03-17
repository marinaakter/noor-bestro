function GalleryGrid({ images }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
      {images.map((image, index) => (
        <article key={image} className={`group visual-frame bg-brand-card ${index % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5"}`}>
          <div className={`relative overflow-hidden ${index % 3 === 0 ? "h-80 sm:h-[26rem]" : "h-72 sm:h-80"}`}>
            <img src={image} alt="Noor Bistro gallery" className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-wine/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </article>
      ))}
    </div>
  );
}

export default GalleryGrid;
