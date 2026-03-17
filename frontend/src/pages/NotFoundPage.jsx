import { Link } from "react-router-dom";

import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageTransition from "../components/layout/PageTransition";
import { routes } from "../constants/routes";

function NotFoundPage() {
  return (
    <PageTransition>
      <section className="section-shell">
        <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <span className="eyebrow">404</span>
          <h1 className="font-display text-5xl sm:text-6xl">This page could not be found.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-brand-text">
            The page you are looking for may have moved, or the link may be incomplete. You can return to Noor Bistro's home page below.
          </p>
          <Button as={Link} to={routes.home} className="mt-8">
            Back To Home
          </Button>
        </Container>
      </section>
    </PageTransition>
  );
}

export default NotFoundPage;
