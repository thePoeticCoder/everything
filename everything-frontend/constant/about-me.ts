export const funFacts = [
  "Poetry Enthusiast ✍️",
  "Lets listen music 🎮",
  "Traveler 🌍",
];

export const experiences = [
  {
    year: "Oct 23 - Present",
    title: "Product Engineer at Travelopia",
    description:
      "Developed Partner Portal, Universal Quote Tool, Checkout Page, and Payment Portal using Next.js, Nest.js, and AWS.",
  },
  {
    year: "Dec 21 - Aug 23",
    title: "SDE 1 at Kenko Health",
    description:
      "Spearheaded True-Cashless Dashboard and implemented microservices architecture with Kafka, NodeJS, and MongoDB.",
  },
  {
    year: "Mar 21 - Dec 21",
    title: "System Engineer at TCS",
    description:
      "Improved a product website with new features using AngularJS and Node.js, completed training, and worked in an agile environment.",
  },
];
export const introStart = `Hi, I'm Paras Jain, a Product Engineer at Travelopia!`;
export const introEnd = `I'm a passionate software developer skilled in NodeJS, ReactJS, Kafka, and Databases.  
I thrive on solving complex problems and building clean, efficient applications.`;

export const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/thePoeticCoder",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/thepoeticcoder/",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9650861187",
  },
  {
    name: "Email",
    href: "mailto:parasjainn08@gmail.com",
  },
  {
    name: "Call",
    href: "tel:+919650861187",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/poetic.coder?igsh=MTVjZHAweW52aXlycA==",
  },
  {
    name: "See my resume",
    href: `https://drive.google.com/file/d/1pMUdaRG_XmxJlFDkCz-BxYuRpjnkB2EZ/view?usp=drivesdk`,
  },
];

export const skills = [
  { name: "JavaScript", years: 5 },
  { name: "React.js", years: 4 },
  { name: "Node.js", years: 4 },
  { name: "Database", years: 4 },
  { name: "Kafka", years: 3 },
  { name: "AWS", years: 3 },
  { name: "System Design", years: 3 },
  { name: "CI/CD", years: 5 },
];

export type Skill = {
  name: string;
  years: number;
};

export type ExperienceType = {
  year: string;
  title: string;
  description: string;
};
