import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import GalleryGrid from "../components/gallery/GalleryGrid";
import PageHero from "../components/layout/PageHero";
import PageTransition from "../components/layout/PageTransition";
import { fallbackGallery } from "../data/fallbackGallery";

function GalleryPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Gallery"
        title="A visual glimpse of Noor Bistro's dishes, rooms, and memorable dining moments."
        description="From plated signatures to the warmth of the dining room, the gallery reflects the restaurant's premium, composed atmosphere."
        image="https://images.unsplash.com/photo-1559329007-40df8a9345d8"
      />

      <section className="section-shell bg-section-wash">
        <Container>
          <SectionHeading
            eyebrow="Curated Visuals"
            title="Food, interiors, and the details that shape the Noor Bistro experience."
            description="The gallery is arranged to feel cinematic and balanced, giving guests a sense of the ambiance before they arrive."
          />
          <div className="mt-12">
            <GalleryGrid images={fallbackGallery} />
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}

export default GalleryPage;
