export const navLinks = [
  { id: "home", url: "/", label: "Home" },
  { id: "services", url: "/services", label: "Services" },
  { id: "reviews", url: "/reviews", label: "Reviews" },
  { id: "pricing", url: "pricing", label: "Pricing" },
  { id: "aboutme", url: "about-me", label: "AboutMe" },
  { id: "contact", url: "contact-us", label: "ContactUS" },
  { id: "machineCoding", url: "machine-coding", label: "Machine" },
];

export type NavLinkType = {
  id: string;
  label: string;
  url: string;
};
