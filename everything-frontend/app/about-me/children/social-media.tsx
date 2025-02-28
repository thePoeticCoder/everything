import { contactLinks } from "@/constant/about-me";

const SocialMedia = () => {
  return (
    <div className="flex justify-center space-x-2 mt-2">
      {contactLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-gray-600 active:shadow-none shadow-lg bg-gradient-to-tr from-gray-600 to-gray-400 border-gray-800 text-white"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
