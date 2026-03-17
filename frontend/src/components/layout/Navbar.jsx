import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../../constants/navLinks";
import { routes } from "../../constants/routes";
import { siteConfig } from "../../constants/siteConfig";
import { uiTokens } from "../../styles/uiTokens";
import { cn } from "../../utils/cn";
import { useUiStore } from "../../store/ui.store";
import Button from "../common/Button";
import Container from "../common/Container";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUiStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(uiTokens.navbar.shell, isScrolled ? uiTokens.navbar.solid : uiTokens.navbar.transparent)}>
      <Container className="flex items-center justify-between py-4">
        <Link to={routes.home} className={uiTokens.navbar.brand}>
          <span className={uiTokens.navbar.brandTitle}>Noor Bistro</span>
          <span className={uiTokens.navbar.brandMeta}>Gulshan, Dhaka</span>
        </Link>

        <nav className={uiTokens.navbar.nav}>
          {navLinks.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => cn(uiTokens.navbar.navLink, isActive && uiTokens.navbar.navLinkActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={uiTokens.navbar.actionWrap}>
          <a href={`tel:${siteConfig.phone}`} className={uiTokens.navbar.phoneLink}>
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <Button as={Link} to={routes.reservation}>
            Reserve A Table
          </Button>
        </div>

        <button
          type="button"
          className={uiTokens.navbar.mobileToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            className={uiTokens.navbar.mobilePanel}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className={uiTokens.navbar.mobileInner}>
              {navLinks.map((item) => (
                <NavLink key={item.href} to={item.href} onClick={closeMobileMenu} className={({ isActive }) => cn(uiTokens.navbar.mobileLink, isActive && uiTokens.navbar.mobileLinkActive)}>
                  {item.label}
                </NavLink>
              ))}
              <Button as={Link} to={routes.reservation} onClick={closeMobileMenu} className="w-full">
                Reserve A Table
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
