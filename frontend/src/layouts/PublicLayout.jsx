import { Outlet } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";
import { UiProvider } from "../store/ui.store";

function PublicLayout() {
  useScrollToTop();

  return (
    <UiProvider>
      <div className="min-h-screen bg-brand-bg">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </UiProvider>
  );
}

export default PublicLayout;
