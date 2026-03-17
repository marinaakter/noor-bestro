import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import Container from "../components/common/Container";
import ContactForm from "../components/forms/ContactForm";
import PageHero from "../components/layout/PageHero";
import PageTransition from "../components/layout/PageTransition";
import { siteConfig } from "../constants/siteConfig";

function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="Reach Noor Bistro for reservations, private dining, or thoughtful assistance."
        description="If you have a question about dining, events, timings, or special arrangements, we would be glad to hear from you."
        image="https://images.unsplash.com/photo-1515669097368-22e68427d265"
      />

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="premium-card p-8 sm:p-9">
              <h3 className="text-[1.95rem] leading-tight">Visit Us</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-brand-text">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-brand-red" />
                  {siteConfig.location}
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-red" />
                  {siteConfig.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-red" />
                  {siteConfig.email}
                </p>
              </div>
            </div>

            <div className="premium-card p-8 sm:p-9">
              <h3 className="text-[1.95rem] leading-tight">Hours</h3>
              <p className="mt-4 text-sm leading-7 text-brand-text">
                Sunday - Thursday: {siteConfig.hours.weekdays}
                <br />
                Friday - Saturday: {siteConfig.hours.weekends}
              </p>
            </div>

            <div className="premium-card overflow-hidden">
              <div className="flex min-h-72 items-center justify-center bg-brand-alt p-8 text-center">
                <div>
                  <h3 className="text-[1.95rem] leading-tight">Map Placeholder</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-brand-muted">
                    Replace this area with an embedded Google Map or a custom static location visual for Gulshan, Dhaka.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card p-8 sm:p-9">
              <h3 className="text-[1.95rem] leading-tight">Social</h3>
              <div className="mt-5 flex gap-4">
                <a href="https://instagram.com" className="inline-flex rounded-full border border-brand-border p-3 text-brand-wine transition-colors hover:bg-brand-alt" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://facebook.com" className="inline-flex rounded-full border border-brand-border p-3 text-brand-wine transition-colors hover:bg-brand-alt" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

export default ContactPage;
