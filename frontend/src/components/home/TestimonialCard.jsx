function TestimonialCard({ quote, name, title }) {
  return (
    <article className="premium-card p-8 sm:p-9">
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-blush/25 font-display text-3xl leading-none text-brand-wine">
        "
      </span>
      <p className="text-lg leading-8 text-brand-text/95">{quote}</p>
      <div className="mt-6">
        <h3 className="text-2xl">{name}</h3>
        <p className="mt-1 text-sm text-brand-muted">{title}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
