export const navLinks = [
  { id: "home", url: "/", label: "Home" },
  { id: "contact", url: "contact-us", label: "ContactUS" },
  { id: "aboutme", url: "about-me", label: "AboutMe" },
  { id: "reviews", url: "/reviews", label: "Reviews" },
  { id: "services", url: "/services", label: "Services" },
  { id: "pricing", url: "pricing", label: "Pricing" },
  { id: "tools", url: "tools", label: "Tools" },
  { id: "machineCodes", url: "machine-codes", label: "Machine Code" },
];

export type NavLinkType = {
  id: string;
  label: string;
  url: string;
};
