import { motion } from "framer-motion";

import Button from "../common/Button";
import Container from "../common/Container";
import { fadeUp } from "../../lib/motion";

function PageHero({ eyebrow, title, description, image, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,116,139,0.14),transparent_38%)]" />
      </div>
      <Container className="relative py-28 sm:py-32 lg:py-40">
        <motion.div className="hero-panel max-w-4xl text-brand-light" initial="hidden" animate="visible" variants={fadeUp}>
          <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-light/90">
            {eyebrow}
          </span>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] text-brand-light sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-light/80 sm:text-lg">{description}</p>
          {(primaryLabel || secondaryLabel) && (
            <div className="mt-9 flex flex-wrap gap-4">
              {primaryLabel ? (
                <Button as="a" href={primaryHref}>
                  {primaryLabel}
                </Button>
              ) : null}
              {secondaryLabel ? (
                <Button as="a" href={secondaryHref} variant="secondary" className="border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-wine">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

export default PageHero;
