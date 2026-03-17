import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import PageHero from "../components/layout/PageHero";
import PageTransition from "../components/layout/PageTransition";

function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About Noor Bistro"
        title="A restaurant built around polished hospitality and a quiet sense of occasion."
        description="Noor Bistro was created for guests who appreciate thoughtful service, elegant interiors, and a menu that honors both familiarity and refinement."
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de"
      />

      <section className="section-shell">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="visual-frame">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9" alt="Interior of Noor Bistro" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Designed for Dhaka's modern diners, while staying rooted in warmth and familiarity."
              description="At Noor Bistro, dining is not rushed. We believe in graceful pacing, refined service, and dishes that carry comfort as well as detail. The restaurant reflects the energy of Gulshan while remaining calm, intimate, and deeply welcoming."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-text">
              <p>The menu draws from beloved Bangladeshi influences, broader regional inspirations, and a contemporary restaurant sensibility that values balance over excess.</p>
              <p>From celebratory rice dishes to premium seafood, our kitchen focuses on generous flavor, composed presentation, and an atmosphere suited to both everyday elegance and meaningful occasions.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-brand-alt bg-section-wash">
        <Container>
          <SectionHeading
            eyebrow="Philosophy"
            title="Every detail is meant to feel calm, polished, and considered."
            description="Noor Bistro is guided by a few simple values that shape the guest experience from arrival to the final course."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Hospitality First", "Service should feel intuitive, warm, and naturally attentive."],
              ["Curated Menu", "The menu is edited with care so each dish earns its place."],
              ["Elegant Ambiance", "Interiors are shaped for comfort, conversation, and evening light."],
              ["Memorable Occasions", "A restaurant experience suitable for both casual refinement and celebration."]
            ].map(([title, copy]) => (
              <article key={title} className="premium-card p-8 sm:p-9">
                <h3 className="text-[1.9rem] leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-8 text-brand-text/90">{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Ambiance"
              title="An interior language of warmth, softness, and quiet confidence."
              description="The space is intended to feel cinematic without being dramatic. Gentle lighting, layered textures, and balanced seating create an environment where guests can settle in and stay."
            />
          </div>
          <div className="visual-frame">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Noor Bistro ambiance" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

export default AboutPage;
