import { ArrowRight, CakeSlice, Clock3, Fish, GlassWater, MapPin, Phone, Soup, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getFeaturedMenu } from "../api/menu.api";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import ErrorState from "../components/common/ErrorState";
import Loader from "../components/common/Loader";
import SectionHeading from "../components/common/SectionHeading";
import GuestNotesCarousel from "../components/home/GuestNotesCarousel";
import PageTransition from "../components/layout/PageTransition";
import MenuCard from "../components/menu/MenuCard";
import { routes } from "../constants/routes";
import { siteConfig } from "../constants/siteConfig";
import { fallbackGallery } from "../data/fallbackGallery";
import { fadeUp, staggerWrap } from "../lib/motion";
import { normalizeError } from "../utils/normalizeError";

const guestNotes = [
  {
    quote: "Every course arrived with a quiet confidence, and the team made our family dinner feel beautifully personal.",
    name: "Farzana Rahman",
    title: "Weekend guest from Gulshan",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    imageAlt: "Guests enjoying an elegant restaurant dinner"
  },
  {
    quote: "Noor kept the warmth of Bangladeshi flavor but served it with the polish I want for an important business dinner.",
    name: "Tariq Ahmed",
    title: "Business dinner host",
    image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7",
    imageAlt: "Refined table setting with plated dishes"
  },
  {
    quote: "The room felt calm, the service was thoughtful, and our birthday evening moved at exactly the right pace.",
    name: "Nadia Karim",
    title: "Birthday reservation guest",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    imageAlt: "Warm restaurant table prepared for a celebration"
  },
  {
    quote: "The seafood and kacchi were memorable, but what stayed with us was how effortless the whole evening felt.",
    name: "Rehan Chowdhury",
    title: "Family celebration guest",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    imageAlt: "Shared restaurant table with premium dishes"
  }
];

const signatureCategories = [
  {
    title: "Rice & Biryani",
    copy: "Celebratory rice dishes with rich aromas and layered spice.",
    icon: Soup,
    accent: "bg-brand-blush/35 text-brand-wine"
  },
  {
    title: "Seafood",
    copy: "Premium prawn and fish dishes with Bengal-inspired character.",
    icon: Fish,
    accent: "bg-brand-teal/25 text-brand-wine"
  },
  {
    title: "Signature Mains",
    copy: "Slow-cooked meats, grills, and polished comforting plates.",
    icon: UtensilsCrossed,
    accent: "bg-brand-red/10 text-brand-red"
  },
  {
    title: "Desserts & Drinks",
    copy: "Firni, lassi, borhani, and gentle sweet finishes.",
    icon: CakeSlice,
    secondaryIcon: GlassWater,
    accent: "bg-brand-card text-brand-wine"
  }
];

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

      <section className="bg-brand-alt bg-section-wash py-10 sm:py-12 lg:py-14">
        <Container className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Modern dining rooted in warm hospitality."
              description="Noor Bistro brings familiar Bangladeshi flavors into a polished room for long conversations, family celebrations, and graceful meals."
            />
            <div className="mt-4">
              <Link to={routes.about} className="editorial-link">
                Read Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="visual-frame h-56 sm:h-64 lg:h-60">
            <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8" alt="Refined dining table at Noor Bistro" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="bg-brand-alt bg-section-wash py-12 sm:py-14 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Signature Categories"
            title="Signature categories, served simply."
            description="Rice plates, seafood, comforting mains, and sweet chilled finishes."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {signatureCategories.map(({ title, copy, icon: Icon, secondaryIcon: SecondaryIcon, accent }) => (
              <article key={title} className="premium-card group p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-[1rem] shadow-[0_10px_18px_rgba(31,31,31,0.05)] ${accent}`}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  {SecondaryIcon ? (
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-border bg-brand-alt text-brand-wine transition-transform duration-500 group-hover:-translate-y-1">
                      <SecondaryIcon size={15} strokeWidth={1.9} />
                    </div>
                  ) : null}
                </div>
                <div className="mt-5 h-px w-10 bg-brand-red/35 transition-all duration-500 group-hover:w-16" />
                <h3 className="mt-4 text-[1.42rem] leading-tight">{title}</h3>
                <p className="mt-2 min-h-[3.8rem] text-[0.82rem] leading-6 text-brand-text/90">{copy}</p>
                <Link to={routes.menu} className="mt-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-brand-wine transition-all duration-300 group-hover:gap-3">
                  View Menu
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Guest Notes"
            title="Guest notes moving through memorable evenings."
            description="Warm words from celebrations, business dinners, and long meals shaped by attentive service."
          />
          <GuestNotesCarousel notes={guestNotes} />
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

      <section className="py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="rounded-[1.75rem] bg-brand-wine px-5 py-6 text-brand-light shadow-lift sm:px-7 lg:px-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-light/25" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-light/70">Reserve Your Table</span>
                </div>
                <h2 className="mt-3 font-display text-3xl leading-tight text-brand-light sm:text-4xl">
                  A quiet table, ready when you are.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-7 text-brand-light/75">
                  Dinner, guests, or a small celebration. Tell us the time, and we will shape the evening with care.
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-white/15 bg-white/[0.08] p-3 lg:w-[32rem]">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 text-xs leading-5 text-brand-light/75">
                      <MapPin size={15} className="shrink-0 text-brand-light/80" />
                      <span>{siteConfig.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs leading-5 text-brand-light/75">
                      <Clock3 size={15} className="shrink-0 text-brand-light/80" />
                      <span>{siteConfig.hours.weekdays} daily rhythm</span>
                    </div>
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-xs leading-5 text-brand-light/80 hover:text-brand-light">
                      <Phone size={15} className="shrink-0" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>

                  <Button as={Link} to={routes.reservation} className="min-h-[2.9rem] bg-brand-light px-6 text-brand-wine hover:bg-brand-alt">
                    Book Now
                  </Button>
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
