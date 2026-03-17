import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getMenu } from "../api/menu.api";
import Container from "../components/common/Container";
import ErrorState from "../components/common/ErrorState";
import Loader from "../components/common/Loader";
import SectionHeading from "../components/common/SectionHeading";
import PageHero from "../components/layout/PageHero";
import PageTransition from "../components/layout/PageTransition";
import CategoryFilter from "../components/menu/CategoryFilter";
import MenuCard from "../components/menu/MenuCard";
import { normalizeError } from "../utils/normalizeError";

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadMenu() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await getMenu(activeCategory);
        setMenuItems(response.data || []);
      } catch (error) {
        setErrorMessage(normalizeError(error, "Unable to load the menu right now."));
      } finally {
        setIsLoading(false);
      }
    }

    loadMenu();
  }, [activeCategory]);

  return (
    <PageTransition>
      <PageHero
        eyebrow="The Menu"
        title="Curated plates designed for long lunches, graceful dinners, and memorable gatherings."
        description="From Noor Bistro's signature rice dishes to elegant seafood and carefully balanced desserts, each item is prepared to feel generous, polished, and deeply satisfying."
        image="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
      />

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Browse Categories"
            title="A menu shaped around comfort, occasion, and refined presentation."
            description="Use the filters below to explore the menu by category. The selection is loaded directly from the backend to keep it dynamic and easy to expand."
          />

          <div className="mt-10 rounded-[1.75rem] border border-brand-border/80 bg-brand-card/70 p-5 shadow-card sm:p-6">
            <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="mt-12">
            {isLoading ? <Loader label="Loading menu..." /> : null}
            {errorMessage ? <ErrorState message={errorMessage} /> : null}
            {!isLoading && !errorMessage && menuItems.length === 0 ? <div className="premium-card p-10 text-center text-brand-muted">No menu items are available for this category yet.</div> : null}
            {!isLoading && !errorMessage && menuItems.length > 0 ? (
              <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {menuItems.map((item) => (
                  <MenuCard key={item.slug} item={item} />
                ))}
              </motion.div>
            ) : null}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

export default MenuPage;
