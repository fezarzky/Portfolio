import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils.js";

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn("w-full flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

        <div className="container flex justify-between items-center">
          <a className="text-xl font-bold font-poppins flex items-center"
             href="#hero">
            <span className="relative z-10">
              <span className="text-glow text-[#CCB465]"> Feza's </span> Portfolio
            </span>
          </a>

          {/* Desktop Navigation  */}
          <div className="hidden md:flex space-x-10 text-md font-light font-poppins">
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className="hover:text-[#FF5841] transition-colors duration-300">
                {item.name}
              </a>  
            ))}
          </div>

          {/* Mobile Navigation */}

          <button onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="md:hidden z-50 p-2 text-poppins"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>

          <div className={cn("fixed inset-0 backdrop-blur-md bg-background/95 z-40 flex flex-col items-center justify-center",
                          "transition-all duration-300 md:hidden", 
                          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
            <div className="flex flex-col space-y-10 text-md font-light font-poppins">
              {navItems.map((item, key) => (
                <a key={key} href={item.href} className="hover:text-[#FF5841] transition-colors duration-300"
                   onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>  
              ))}
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;