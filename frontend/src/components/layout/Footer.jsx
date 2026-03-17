import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { navLinks } from "../../constants/navLinks";
import { siteConfig } from "../../constants/siteConfig";
import { uiTokens } from "../../styles/uiTokens";
import Container from "../common/Container";

function Footer() {
  return (
    <footer className={`${uiTokens.footer.shell} border-t border-brand-border/10`}>
      <Container className={uiTokens.footer.grid}>
        <div>
          <h3 className={uiTokens.footer.brandTitle}>Noor Bistro</h3>
          <p className={uiTokens.footer.body}>
            A refined dining address in Gulshan, Dhaka shaped around warm hospitality, curated flavors, and elegant evenings.
          </p>
        </div>

        <div>
          <h4 className={uiTokens.footer.label}>Quick Links</h4>
          <div className={uiTokens.footer.links}>
            {navLinks.map((item) => (
              <Link key={item.href} to={item.href} className={uiTokens.footer.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className={uiTokens.footer.label}>Contact</h4>
          <div className={uiTokens.footer.content}>
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5" />
              {siteConfig.location}
            </p>
            <p className="flex items-center gap-3">
              <Phone size={16} />
              {siteConfig.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} />
              {siteConfig.email}
            </p>
          </div>
        </div>

        <div>
          <h4 className={uiTokens.footer.label}>Opening Hours</h4>
          <div className={uiTokens.footer.content}>
            <p>Sunday - Thursday: {siteConfig.hours.weekdays}</p>
            <p>Friday - Saturday: {siteConfig.hours.weekends}</p>
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" className={uiTokens.footer.social} aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" className={uiTokens.footer.social} aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
