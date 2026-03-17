import { Mail, Phone } from "lucide-react";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ReservationForm from "../components/forms/ReservationForm";
import PageHero from "../components/layout/PageHero";
import PageTransition from "../components/layout/PageTransition";
import { siteConfig } from "../constants/siteConfig";

function ReservationPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Reservations"
        title="Reserve a table for a thoughtful evening of dining and hospitality."
        description="Plan a lunch, dinner, or special gathering with ease. Our team will review each request carefully and confirm availability as soon as possible."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
      />

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <ReservationForm />

          <div className="space-y-6">
            <div className="premium-card p-8 sm:p-9">
              <SectionHeading
                eyebrow="Reservation Notes"
                title="A calm, considered experience from the moment you arrive."
                description="For larger parties, special celebrations, or specific seating preferences, please include details in your request so we can guide the experience with care."
              />
            </div>

            <div className="premium-card p-8 sm:p-9">
              <h3 className="text-[1.95rem] leading-tight">Need Assistance?</h3>
              <div className="mt-5 space-y-4 text-sm text-brand-text">
                <p className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-red" />
                  {siteConfig.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-red" />
                  {siteConfig.email}
                </p>
                <p className="leading-7 text-brand-muted">For private dining inquiries or occasion-based table arrangements, our team will be happy to assist.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

export default ReservationPage;
