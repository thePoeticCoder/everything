import { contactLinks } from "@/constant/about-me";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-900">
      <div className="w-[90%] max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-all duration-300 text-sm md:text-base relative pb-1 border-b-2 border-transparent hover:border-black"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-gray-400 text-sm md:text-base border-t border-gray-600 pt-3 md:pt-0 md:border-0">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
