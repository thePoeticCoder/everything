import { contactLinks } from "@/constant/about-me";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {contactLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center px-4 py-2 text-white font-medium rounded-lg shadow-md transition-all duration-300 bg-gray-700 hover:bg-gray-800 hover:scale-105"
        >
          <span className="absolute inset-0 bg-white opacity-10 scale-0 transition-transform duration-300 group-hover:scale-125 rounded-lg"></span>
          <span className="relative z-10">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
