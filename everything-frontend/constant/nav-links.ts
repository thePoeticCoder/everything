export const navLinks = [
  { id: "home", url: "/", label: "Home" },
  { id: "features", url: "#", label: "Features" },
  { id: "services", url: "/services", label: "Services" },
  { id: "reviews", url: "/reviews", label: "Reviews" },
  { id: "aboutme", url: "about-me", label: "About Me" },
  { id: "pricing", url: "pricing", label: "Pricing" },
  { id: "contact", url: "contact-us", label: "Contact US" },
];

export type NavLinkType = {
  id: string;
  label: string;
  url: string;
};
