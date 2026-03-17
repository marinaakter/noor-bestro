import { createContext, useContext, useMemo, useState } from "react";

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const value = useMemo(
    () => ({
      isMobileMenuOpen,
      openMobileMenu: () => setIsMobileMenuOpen(true),
      closeMobileMenu: () => setIsMobileMenuOpen(false),
      toggleMobileMenu: () => setIsMobileMenuOpen((current) => !current)
    }),
    [isMobileMenuOpen]
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUiStore() {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("useUiStore must be used inside UiProvider.");
  }

  return context;
}
