import { ArrowRight, Clock3, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getFeaturedMenu } from "../api/menu.api";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import ErrorState from "../components/common/ErrorState";
import Loader from "../components/common/Loader";
import SectionHeading from "../components/common/SectionHeading";
import TestimonialCard from "../components/home/TestimonialCard";
import PageTransition from "../components/layout/PageTransition";
import MenuCard from "../components/menu/MenuCard";
import { routes } from "../constants/routes";
import { siteConfig } from "../constants/siteConfig";
import { fallbackGallery } from "../data/fallbackGallery";
import { fadeUp, staggerWrap } from "../lib/motion";
import { normalizeError } from "../utils/normalizeError";

function HomePage() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadFeaturedMenu() {
      try {
        const response = await getFeaturedMenu();
        setFeaturedItems(response.data || []);
      } catch (error) {
        setErrorMessage(normalizeError(error, "Unable to load the featured dishes right now."));
      } finally {
        setIsLoading(false);
      }
    }

    loadFeaturedMenu();
  }, []);

  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9" alt="Noor Bistro dining room" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <Container className="relative py-28 sm:py-32 lg:py-44">
          <motion.div className="hero-panel max-w-4xl text-brand-light" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-light/90">
              Noor Bistro, Gulshan
            </span>
            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] text-brand-light sm:text-6xl lg:text-7xl">
              An elegant dining address shaped by Bangladeshi warmth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-light/80 sm:text-lg">
              Noor Bistro brings together polished hospitality, thoughtfully composed plates, and a calm premium atmosphere in the heart of Gulshan, Dhaka.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button as={Link} to={routes.reservation}>
                Reserve A Table
              </Button>
              <Button as={Link} to={routes.menu} variant="secondary" className="border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-wine">
                Explore The Menu
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Featured Dishes"
            title="Signature plates prepared with care, depth, and a sense of occasion."
            description="A curated selection from Noor Bistro's most loved dishes, from celebratory rice plates to premium seafood and refined finishes."
          />
          <div className="mt-12">
            {isLoading ? <Loader label="Loading featured dishes..." /> : null}
            {errorMessage ? <ErrorState message={errorMessage} /> : null}
            {!isLoading && !errorMessage ? (
              <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }}>
                {featuredItems.slice(0, 6).map((item) => (
                  <MenuCard key={item.slug} item={item} />
                ))}
              </motion.div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-brand-alt bg-section-wash">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A modern restaurant experience rooted in hospitality, detail, and restraint."
              description="Noor Bistro was imagined as a place for long conversations, family celebrations, and memorable dining moments. Our menu respects familiar Bangladeshi flavors while presenting them with polish and quiet confidence."
            />
            <div className="mt-8">
              <Link to={routes.about} className="editorial-link">
                Read Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="visual-frame">
            <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8" alt="Refined dining table at Noor Bistro" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Noor"
            title="A setting shaped for refined meals, private moments, and attentive service."
            description="Everything is designed to feel composed and welcoming, from the flow of service to the lighting, plating, and sense of comfort at the table."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Curated Menu",
                copy: "Signature Bangladeshi and globally inspired dishes, selected for balance, richness, and occasion."
              },
              {
                title: "Warm Hospitality",
                copy: "Service that feels attentive and personal without ever becoming intrusive."
              },
              {
                title: "Elegant Ambiance",
                copy: "Soft lighting, comfortable seating, and a calm atmosphere tailored for long evenings."
              },
              {
                title: "Private Dining Feel",
                copy: "Ideal for family gatherings, business lunches, and celebrations that require a polished setting."
              }
            ].map((feature) => (
              <article key={feature.title} className="premium-card p-8 sm:p-9">
                <div className="mb-6 inline-flex rounded-full bg-brand-teal/20 p-3.5 text-brand-wine">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-[1.95rem] leading-tight">{feature.title}</h3>
                <p className="mt-4 text-sm leading-8 text-brand-text/90">{feature.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-brand-alt bg-section-wash">
        <Container>
          <SectionHeading
            eyebrow="Signature Categories"
            title="From celebratory rice dishes to seafood and graceful finishes."
            description="Explore the range that defines Noor Bistro: generous rice plates, premium seafood, deeply comforting mains, and desserts that close the evening beautifully."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Rice & Biryani", "Celebratory rice dishes with rich aromas and layered spice."],
              ["Seafood", "Premium prawn and fish dishes with Bengal-inspired character."],
              ["Signature Mains", "Slow-cooked meats, grills, and polished comforting plates."],
              ["Desserts & Drinks", "Firni, lassi, borhani, and gentle sweet finishes."]
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
        <Container>
          <SectionHeading
            eyebrow="Guest Notes"
            title="A dining experience remembered for care, comfort, and depth of flavor."
            description="Noor Bistro is designed for guests who want more than a meal. The setting, service, and pace all work together to make evenings feel intentional."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <TestimonialCard quote="From the welcome to dessert, everything felt calm, polished, and deeply considered." name="Farzana Rahman" title="Weekend guest from Gulshan" />
            <TestimonialCard quote="The menu felt premium without losing the warmth of familiar Bangladeshi flavors." name="Tariq Ahmed" title="Business dinner host" />
            <TestimonialCard quote="A beautiful room for family celebrations, with service that quietly understands the occasion." name="Nadia Karim" title="Birthday reservation guest" />
          </div>
        </Container>
      </section>

      <section className="section-shell bg-brand-alt bg-section-wash">
        <Container>
          <SectionHeading
            eyebrow="Gallery Preview"
            title="A glimpse into Noor Bistro's atmosphere, plating, and signature moments."
            description="Curated visuals from the dining room and the kitchen, chosen to reflect the warm, cinematic character of the restaurant."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fallbackGallery.slice(0, 4).map((image) => (
              <div key={image} className="visual-frame">
                <img src={image} alt="Noor Bistro gallery preview" className="h-72 w-full object-cover transition-transform duration-700 ease-premium hover:scale-[1.06]" />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to={routes.gallery} className="editorial-link">
              View Full Gallery
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="rounded-[2.25rem] bg-brand-wine px-6 py-10 text-brand-light shadow-lift sm:px-10 lg:px-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-light/80">
                  Reserve Your Table
                </span>
                <h2 className="font-display text-4xl text-brand-light sm:text-5xl">
                  Plan an evening of refined dining in the heart of Gulshan.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-brand-light/80">
                  Whether you are arranging a quiet dinner, hosting visiting guests, or celebrating with family, our team is ready to make the experience feel seamless.
                </p>
                <div className="mt-8">
                  <Button as={Link} to={routes.reservation} className="bg-brand-light text-brand-wine hover:bg-brand-alt">
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1" />
                    <div>
                      <h3 className="text-lg text-brand-light">Location</h3>
                      <p className="mt-2 text-sm leading-7 text-brand-light/75">{siteConfig.location}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5">
                  <div className="flex items-start gap-3">
                    <Clock3 size={18} className="mt-1" />
                    <div>
                      <h3 className="text-lg text-brand-light">Hours</h3>
                      <p className="mt-2 text-sm leading-7 text-brand-light/75">
                        Sun - Thu: {siteConfig.hours.weekdays}
                        <br />
                        Fri - Sat: {siteConfig.hours.weekends}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

export default HomePage;
