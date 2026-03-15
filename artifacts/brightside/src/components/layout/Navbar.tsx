import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Service Area", href: "#areas" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="h-24 w-56 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Brightside Property Services Logo" 
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isScrolled ? "text-slate-600" : "text-white/90 hover:text-white drop-shadow-sm"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:5552744487" 
                className={cn(
                  "flex items-center gap-2 text-sm font-bold transition-colors",
                  isScrolled ? "text-primary" : "text-white drop-shadow-md hover:text-white/90"
                )}
              >
                <Phone className="h-4 w-4" />
                (555) BRIGHT-7
              </a>
              <Button 
                className="bg-[#f5a623] hover:bg-[#e09510] text-[#0f2472] font-bold border-0 shadow-md"
                onClick={() => scrollToSection('#quote')}
              >
                Get a Free Quote
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isScrolled ? "text-slate-900" : "text-primary bg-white/80 backdrop-blur"
              )}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left py-2 px-4 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="h-px w-full bg-slate-100 my-2" />
          <a 
            href="tel:5552744487" 
            className="flex items-center justify-center gap-2 py-3 text-primary font-bold bg-primary/5 rounded-xl"
          >
            <Phone className="h-5 w-5" />
            (555) 274-4487
          </a>
          <Button 
            className="w-full bg-[#f5a623] hover:bg-[#e09510] text-[#0f2472] font-bold border-0" 
            size="lg"
            onClick={() => scrollToSection('#quote')}
          >
            Get a Free Quote
          </Button>
        </div>
      )}
    </nav>
  );
}
