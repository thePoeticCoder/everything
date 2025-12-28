import { progressBarCode, reactHookFormCode } from "./machine-code";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Category =
  | "HTML & CSS"
  | "Core UI"
  | "Interactive UI"
  | "Forms & Input"
  | "Data & Lists"
  | "Layouts & Responsiveness"
  | "Performance"
  | "Accessibility"
  | "Animations"
  | "Advanced UI"
  | "React"
  | "State Management"
  | "Testing"
  | "Security"
  | "PWA & Offline"
  | "Browser APIs"
  | "WebGL & Graphics";

export interface MachineCodeItem {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  code?: string;
}

export const machineCodeItems: MachineCodeItem[] = [
  /* ================= HTML & CSS ================= */
  {
    id: 1,
    name: "Basic HTML Layout",
    slug: "basic-html",
    description: "Header, nav, main, footer",
    category: "HTML & CSS",
    difficulty: "Easy",
  },
  {
    id: 2,
    name: "Responsive Design",
    slug: "responsive-design",
    description: "Media queries for all screens",
    category: "HTML & CSS",
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Responsive Navbar",
    slug: "responsive-navbar",
    description: "Hamburger menu",
    category: "HTML & CSS",
    difficulty: "Easy",
  },
  {
    id: 4,
    name: "Responsive Tables",
    slug: "responsive-tables",
    description: "Tables for mobile",
    category: "HTML & CSS",
    difficulty: "Medium",
  },
  {
    id: 5,
    name: "Print Styles",
    slug: "print-css",
    description: "CSS for printing",
    category: "HTML & CSS",
    difficulty: "Easy",
  },
  {
    id: 6,
    name: "Mobile First Design",
    slug: "mobile-first",
    description: "Mobile-first CSS",
    category: "HTML & CSS",
    difficulty: "Medium",
  },

  /* ================= CORE UI ================= */
  {
    id: 7,
    name: "Buttons",
    slug: "buttons",
    description: "Primary, secondary buttons",
    category: "Core UI",
    difficulty: "Easy",
  },
  {
    id: 8,
    name: "Modal",
    slug: "modal",
    description: "Popup with overlay & ESC",
    category: "Core UI",
    difficulty: "Medium",
  },
  {
    id: 9,
    name: "Accordion",
    slug: "accordion",
    description: "Collapsible sections",
    category: "Core UI",
    difficulty: "Easy",
  },
  {
    id: 10,
    name: "Tabs",
    slug: "tabs",
    description: "Tabbed navigation",
    category: "Core UI",
    difficulty: "Medium",
  },
  {
    id: 11,
    name: "Tooltip",
    slug: "tooltip",
    description: "Hover info",
    category: "Core UI",
    difficulty: "Easy",
  },
  {
    id: 12,
    name: "Popover",
    slug: "popover",
    description: "Click popover",
    category: "Core UI",
    difficulty: "Medium",
  },
  {
    id: 13,
    name: "Progress Bar",
    slug: "progress-bar",
    description: "Loading indicator",
    category: "Core UI",
    difficulty: "Easy",
    code: progressBarCode,
  },
  {
    id: 14,
    name: "Star Rating",
    slug: "star-rating",
    description: "Rating component",
    category: "Core UI",
    difficulty: "Medium",
  },

  /* ================= INTERACTIVE UI ================= */
  {
    id: 15,
    name: "Counter",
    slug: "counter",
    description: "Increment decrement",
    category: "Interactive UI",
    difficulty: "Easy",
  },
  {
    id: 16,
    name: "Calculator",
    slug: "calculator",
    description: "Basic arithmetic",
    category: "Interactive UI",
    difficulty: "Easy",
  },
  {
    id: 17,
    name: "Todo App",
    slug: "todo",
    description: "CRUD tasks",
    category: "Interactive UI",
    difficulty: "Easy",
  },
  {
    id: 18,
    name: "Carousel",
    slug: "carousel",
    description: "Image slider",
    category: "Interactive UI",
    difficulty: "Medium",
  },
  {
    id: 19,
    name: "Infinite Carousel",
    slug: "infinite-carousel",
    description: "Looping carousel",
    category: "Interactive UI",
    difficulty: "Medium",
  },
  {
    id: 20,
    name: "Drag & Drop",
    slug: "drag-drop",
    description: "Native DnD",
    category: "Interactive UI",
    difficulty: "Medium",
  },
  {
    id: 21,
    name: "Custom Drag & Drop",
    slug: "custom-dnd",
    description: "Without libs",
    category: "Interactive UI",
    difficulty: "Hard",
  },
  {
    id: 22,
    name: "Keyboard Shortcuts",
    slug: "keyboard-shortcuts",
    description: "Keyboard events",
    category: "Interactive UI",
    difficulty: "Medium",
  },

  /* ================= FORMS ================= */
  {
    id: 23,
    name: "Form Validation",
    slug: "form-validation",
    description: "Client validation",
    category: "Forms & Input",
    difficulty: "Easy",
  },
  {
    id: 24,
    name: "Multi Step Form",
    slug: "multi-step-form",
    description: "Wizard form",
    category: "Forms & Input",
    difficulty: "Medium",
  },
  {
    id: 25,
    name: "Dynamic Fields",
    slug: "dynamic-fields",
    description: "Add/remove fields",
    category: "Forms & Input",
    difficulty: "Medium",
  },
  {
    id: 26,
    name: "OTP Login",
    slug: "otp-login",
    description: "OTP auth flow",
    category: "Forms & Input",
    difficulty: "Medium",
  },
  {
    id: 27,
    name: "Autocomplete",
    slug: "autocomplete",
    description: "Suggestions while typing",
    category: "Forms & Input",
    difficulty: "Medium",
  },
  {
    id: 28,
    name: "File Upload Preview",
    slug: "file-upload",
    description: "Preview uploads",
    category: "Forms & Input",
    difficulty: "Medium",
  },

  /* ================= DATA & LISTS ================= */
  {
    id: 29,
    name: "Fetch API",
    slug: "fetch-api",
    description: "Fetch JSON data",
    category: "Data & Lists",
    difficulty: "Easy",
  },
  {
    id: 30,
    name: "Pagination",
    slug: "pagination",
    description: "Page navigation",
    category: "Data & Lists",
    difficulty: "Medium",
  },
  {
    id: 31,
    name: "Infinite Scroll",
    slug: "infinite-scroll",
    description: "Scroll loading",
    category: "Data & Lists",
    difficulty: "Medium",
  },
  {
    id: 32,
    name: "Search & Filter",
    slug: "search-filter",
    description: "Filter lists",
    category: "Data & Lists",
    difficulty: "Easy",
  },
  {
    id: 33,
    name: "Nested Comments",
    slug: "nested-comments",
    description: "Recursive comments",
    category: "Data & Lists",
    difficulty: "Hard",
  },
  {
    id: 34,
    name: "Data Table",
    slug: "data-table",
    description: "Sort & filter table",
    category: "Data & Lists",
    difficulty: "Medium",
  },

  /* ================= PERFORMANCE ================= */
  {
    id: 35,
    name: "Lazy Loading Images",
    slug: "lazy-images",
    description: "IntersectionObserver",
    category: "Performance",
    difficulty: "Easy",
  },
  {
    id: 36,
    name: "Lazy Loaded Modules",
    slug: "lazy-modules",
    description: "Code splitting",
    category: "Performance",
    difficulty: "Medium",
  },
  {
    id: 37,
    name: "Web Workers",
    slug: "web-workers",
    description: "Off-main-thread work",
    category: "Performance",
    difficulty: "Hard",
  },

  /* ================= ACCESSIBILITY ================= */
  {
    id: 38,
    name: "WCAG Compliance",
    slug: "wcag",
    description: "Accessible UI",
    category: "Accessibility",
    difficulty: "Medium",
  },
  {
    id: 39,
    name: "ARIA Roles",
    slug: "aria",
    description: "ARIA labels",
    category: "Accessibility",
    difficulty: "Medium",
  },
  {
    id: 40,
    name: "Focus Management",
    slug: "focus-management",
    description: "Keyboard focus",
    category: "Accessibility",
    difficulty: "Medium",
  },

  /* ================= ANIMATIONS ================= */
  {
    id: 41,
    name: "CSS Animations",
    slug: "css-animations",
    description: "Transitions & keyframes",
    category: "Animations",
    difficulty: "Easy",
  },
  {
    id: 42,
    name: "SVG Animations",
    slug: "svg-animations",
    description: "Animated SVGs",
    category: "Animations",
    difficulty: "Medium",
  },
  {
    id: 43,
    name: "Page Transitions",
    slug: "page-transitions",
    description: "Smooth navigation",
    category: "Animations",
    difficulty: "Medium",
  },

  /* ================= REACT ================= */
  {
    id: 44,
    name: "React Basics",
    slug: "react-basics",
    description: "Components & props",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 45,
    name: "React Hooks",
    slug: "react-hooks",
    description: "useState/useEffect",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 46,
    name: "Custom Hooks",
    slug: "custom-hooks",
    description: "Reusable hooks",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 47,
    name: "React Router",
    slug: "react-router",
    description: "Client routing",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 48,
    name: "SSR with React",
    slug: "react-ssr",
    description: "Server rendering",
    category: "React",
    difficulty: "Hard",
  },

  /* ================= STATE ================= */
  {
    id: 49,
    name: "Redux Basics",
    slug: "redux",
    description: "Store & reducers",
    category: "State Management",
    difficulty: "Medium",
  },
  {
    id: 50,
    name: "Redux Thunk",
    slug: "redux-thunk",
    description: "Async actions",
    category: "State Management",
    difficulty: "Medium",
  },
  {
    id: 51,
    name: "Redux Saga",
    slug: "redux-saga",
    description: "Side effects",
    category: "State Management",
    difficulty: "Hard",
  },

  /* ================= TESTING ================= */
  {
    id: 52,
    name: "Unit Testing",
    slug: "unit-testing",
    description: "JS unit tests",
    category: "Testing",
    difficulty: "Medium",
  },
  {
    id: 53,
    name: "React Testing Library",
    slug: "rtl",
    description: "Component testing",
    category: "Testing",
    difficulty: "Medium",
  },
  {
    id: 54,
    name: "Cypress E2E",
    slug: "cypress",
    description: "E2E testing",
    category: "Testing",
    difficulty: "Hard",
  },

  /* ================= SECURITY ================= */
  {
    id: 55,
    name: "XSS Protection",
    slug: "xss",
    description: "Prevent XSS",
    category: "Security",
    difficulty: "Medium",
  },
  {
    id: 56,
    name: "CSRF Protection",
    slug: "csrf",
    description: "Prevent CSRF",
    category: "Security",
    difficulty: "Medium",
  },

  /* ================= PWA ================= */
  {
    id: 57,
    name: "PWA Basics",
    slug: "pwa",
    description: "Offline support",
    category: "PWA & Offline",
    difficulty: "Hard",
  },
  {
    id: 58,
    name: "Service Workers",
    slug: "service-workers",
    description: "Caching & offline",
    category: "PWA & Offline",
    difficulty: "Hard",
  },

  /* ================= ADVANCED ================= */
  {
    id: 59,
    name: "Virtual DOM",
    slug: "virtual-dom",
    description: "VDOM implementation",
    category: "Advanced UI",
    difficulty: "Hard",
  },
  {
    id: 60,
    name: "Browser Storage Manager",
    slug: "browser-storage",
    description: "local/session storage",
    category: "Browser APIs",
    difficulty: "Medium",
  },
  {
    id: 60,
    name: "React Hook Form",
    slug: "react-hook-form",
    description: "Form handling with hooks",
    category: "React",
    difficulty: "Medium",
    code: reactHookFormCode,
  },
];

export const DIFFICULTY_OPTIONS: Difficulty[] = ["Easy", "Medium", "Hard"];

/* ---------- Category Options ---------- */

export const CATEGORY_OPTIONS: Category[] = [
  "HTML & CSS",
  "Core UI",
  "Interactive UI",
  "Forms & Input",
  "Data & Lists",
  "Layouts & Responsiveness",
  "Performance",
  "Accessibility",
  "Animations",
  "Advanced UI",
  "React",
  "State Management",
  "Testing",
  "Security",
  "PWA & Offline",
  "Browser APIs",
  "WebGL & Graphics",
];
