import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import GalleryPage from "../pages/GalleryPage";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import NotFoundPage from "../pages/NotFoundPage";
import ReservationPage from "../pages/ReservationPage";

const routeConfig = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "reservation", element: <ReservationPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
];

function RouterContent({ location }) {
  return useRoutes(routeConfig, location);
}

function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <RouterContent location={location} />
      </div>
    </AnimatePresence>
  );
}

export default AppRouter;
