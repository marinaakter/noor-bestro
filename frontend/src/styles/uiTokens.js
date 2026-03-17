import { cn } from "../utils/cn";

export const uiTokens = {
  pageContainer: "container-shell",
  sectionContainer: "section-shell",
  sectionHeading: {
    wrapper: "",
    centered: "mx-auto text-center",
    eyebrow: "eyebrow",
    title: "section-title",
    description: "section-copy"
  },
  button: {
    primary: "btn-primary",
    secondary: "btn-secondary"
  },
  card: "premium-card",
  dishCard: {
    root: "premium-card group overflow-hidden hover:-translate-y-1 hover:shadow-lift",
    imageWrap: "overflow-hidden",
    image: "h-72 w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105",
    content: "space-y-5 p-7",
    badges: "flex flex-wrap gap-2",
    header: "flex items-start justify-between gap-4",
    title: "text-[1.9rem] leading-tight",
    price: "shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-brand-red",
    description: "text-sm leading-7 text-brand-text/90"
  },
  input: "field-base",
  textarea: "field-base min-h-36 resize-none",
  badge: {
    base: "rounded-full px-3 py-1 text-xs font-semibold",
    featured: "bg-brand-blush text-brand-wine",
    chef: "bg-brand-gold/20 text-brand-gold",
    spicy: "bg-brand-rose/20 text-brand-red"
  },
  navbar: {
    shell: "sticky top-0 z-50 transition-all duration-300",
    solid: "border-b border-brand-border bg-brand-bg/95 shadow-soft backdrop-blur-md",
    transparent: "bg-transparent",
    brand: "flex flex-col",
    brandTitle: "font-display text-[2rem] leading-none text-brand-wine",
    brandMeta: "mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-muted",
    nav: "hidden items-center gap-8 lg:flex",
    navLink: "text-sm font-medium tracking-[0.08em] text-brand-text hover:text-brand-wine",
    navLinkActive: "text-brand-wine",
    actionWrap: "hidden items-center gap-4 lg:flex",
    phoneLink: "inline-flex items-center gap-2 text-sm tracking-[0.05em] text-brand-text hover:text-brand-wine",
    mobileToggle: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-heading lg:hidden",
    mobilePanel: "border-t border-brand-border bg-brand-card lg:hidden",
    mobileInner: "flex flex-col gap-6 py-6",
    mobileLink: "text-base font-medium tracking-[0.08em] text-brand-text",
    mobileLinkActive: "text-brand-wine"
  },
  footer: {
    shell: "bg-brand-wine text-brand-light",
    grid: "grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4",
    brandTitle: "font-display text-[2.15rem] text-brand-light",
    body: "mt-5 max-w-xs text-sm leading-8 text-brand-light/80",
    label: "text-sm font-semibold uppercase tracking-[0.22em] text-brand-light/75",
    links: "mt-5 flex flex-col gap-3.5",
    link: "text-sm text-brand-light/80 hover:text-brand-light",
    content: "mt-5 space-y-3 text-sm text-brand-light/80",
    social: "rounded-full border border-white/20 p-2 hover:bg-white/10"
  },
  mutedText: "text-sm leading-7 text-brand-muted",
  formMessage: {
    success: "status-success",
    error: "status-error"
  },
  filterButton: {
    base: "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
    active: "border-brand-red bg-brand-red text-brand-light shadow-soft",
    idle: "border-brand-border bg-brand-card text-brand-text hover:border-brand-mutedRose hover:text-brand-wine"
  }
};

export function getBadgeClasses(variant = "featured") {
  return cn(uiTokens.badge.base, uiTokens.badge[variant] || uiTokens.badge.featured);
}

export function getFormMessageClasses(type = "success") {
  return type === "error" ? uiTokens.formMessage.error : uiTokens.formMessage.success;
}

export function getFilterButtonClasses(isActive) {
  return cn(uiTokens.filterButton.base, isActive ? uiTokens.filterButton.active : uiTokens.filterButton.idle);
}
