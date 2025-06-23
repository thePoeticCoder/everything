// types.ts
export type Tool = {
  id: number;
  name: string;
  description: string;
  slug: string;
  category: string;
};

export const tools: Tool[] = [
  // 🗓️ Date & Time Utilities
  {
    id: 1,
    name: "Date Difference Calculator",
    description: "Calculate days between two dates.",
    slug: "date-difference",
    category: "Date & Time Utilities",
  },
  {
    id: 2,
    name: "Age Calculator",
    description: "Find age from birthdate.",
    slug: "age-calculator",
    category: "Date & Time Utilities",
  },
  {
    id: 3,
    name: "Countdown Timer",
    description: "Countdown to a date or event.",
    slug: "countdown",
    category: "Date & Time Utilities",
  },
  {
    id: 4,
    name: "Stopwatch",
    description: "Start, stop, reset stopwatch.",
    slug: "stopwatch",
    category: "Date & Time Utilities",
  },
  {
    id: 5,
    name: "World Clock",
    description: "Check time in different cities.",
    slug: "world-clock",
    category: "Date & Time Utilities",
  },

  // 🧮 Basic Calculators
  {
    id: 6,
    name: "Standard Calculator",
    description: "Simple arithmetic calculator.",
    slug: "standard-calculator",
    category: "Basic Calculators",
  },
  {
    id: 7,
    name: "Tip Calculator",
    description: "Calculate tip on your bill.",
    slug: "tip-calculator",
    category: "Basic Calculators",
  },
  {
    id: 8,
    name: "Discount Calculator",
    description: "Apply discounts to prices.",
    slug: "discount-calculator",
    category: "Basic Calculators",
  },
  {
    id: 9,
    name: "Loan/EMI Calculator",
    description: "Calculate monthly installments.",
    slug: "emi-calculator",
    category: "Basic Calculators",
  },
  {
    id: 10,
    name: "Unit Converter",
    description: "Convert length, weight, etc.",
    slug: "unit-converter",
    category: "Basic Calculators",
  },

  // ✅ Productivity Tools
  {
    id: 11,
    name: "To-Do List",
    description: "Add and manage tasks.",
    slug: "todo-list",
    category: "Productivity Tools",
  },
  {
    id: 12,
    name: "Pomodoro Timer",
    description: "Work with break timers.",
    slug: "pomodoro",
    category: "Productivity Tools",
  },
  {
    id: 13,
    name: "Daily Planner",
    description: "Plan tasks by hour.",
    slug: "daily-planner",
    category: "Productivity Tools",
  },
  {
    id: 14,
    name: "Habit Tracker",
    description: "Track your daily habits.",
    slug: "habit-tracker",
    category: "Productivity Tools",
  },
  {
    id: 15,
    name: "Notes App",
    description: "Simple notes for quick use.",
    slug: "notes",
    category: "Productivity Tools",
  },

  // 🌍 Web-Based Tools
  {
    id: 16,
    name: "QR Code Generator",
    description: "Generate QR from text/URL.",
    slug: "qr-generator",
    category: "Web-Based Tools",
  },
  {
    id: 17,
    name: "URL Shortener",
    description: "Shorten long URLs.",
    slug: "url-shortener",
    category: "Web-Based Tools",
  },
  {
    id: 18,
    name: "Weather Checker",
    description: "Get current weather info.",
    slug: "weather",
    category: "Web-Based Tools",
  },
  {
    id: 19,
    name: "Currency Converter",
    description: "Live currency rates.",
    slug: "currency-converter",
    category: "Web-Based Tools",
  },
  {
    id: 20,
    name: "IP/Location Finder",
    description: "Find IP location details.",
    slug: "ip-location",
    category: "Web-Based Tools",
  },

  // 🎓 Fun & Educational
  {
    id: 21,
    name: "Random Quote Generator",
    description: "Get motivational quotes.",
    slug: "quotes",
    category: "Fun & Educational",
  },
  {
    id: 22,
    name: "Math Quiz Generator",
    description: "Practice math questions.",
    slug: "math-quiz",
    category: "Fun & Educational",
  },
  {
    id: 23,
    name: "Flashcard App",
    description: "Study with flashcards.",
    slug: "flashcards",
    category: "Fun & Educational",
  },
  {
    id: 24,
    name: "Typing Speed Test",
    description: "Test WPM typing speed.",
    slug: "typing-test",
    category: "Fun & Educational",
  },
  {
    id: 25,
    name: "Mood Tracker",
    description: "Track your emotional state.",
    slug: "mood-tracker",
    category: "Fun & Educational",
  },

  // 🧰 Other Utilities
  {
    id: 26,
    name: "BMI Calculator",
    description: "Body Mass Index from weight/height.",
    slug: "bmi-calculator",
    category: "Other Utilities",
  },
  {
    id: 27,
    name: "Password Generator",
    description: "Generate strong passwords.",
    slug: "password-generator",
    category: "Other Utilities",
  },
  {
    id: 28,
    name: "Text Case Converter",
    description: "UPPER/lower/Sentence case tool.",
    slug: "case-converter",
    category: "Other Utilities",
  },
  {
    id: 29,
    name: "Character Counter",
    description: "Count words & characters.",
    slug: "character-counter",
    category: "Other Utilities",
  },
  {
    id: 30,
    name: "Lorem Ipsum Generator",
    description: "Generate dummy text.",
    slug: "lorem-ipsum",
    category: "Other Utilities",
  },
];
