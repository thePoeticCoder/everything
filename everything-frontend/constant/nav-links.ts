export const navLinks = [
  { id: "home", url: "/", label: "Home" },
  { id: "services", url: "/services", label: "Services" },
  { id: "reviews", url: "/reviews", label: "Reviews" },
  { id: "pricing", url: "pricing", label: "Pricing" },
  { id: "aboutme", url: "about-me", label: "About Me" },
  { id: "contact", url: "contact-us", label: "Contact US" },
];

export type NavLinkType = {
  id: string;
  label: string;
  url: string;
};
