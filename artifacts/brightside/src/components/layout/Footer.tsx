import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Brightside Logo" 
                className="h-8 w-8 object-contain opacity-90 brightness-200"
              />
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Brightside
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Berks County's premier pressure washing and exterior cleaning service. We restore the beauty and value of your property safely and effectively.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className="hover:text-primary transition-colors">Before & After</a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#areas" onClick={(e) => scrollToSection(e, '#areas')} className="hover:text-primary transition-colors">Service Area</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">House Washing</li>
              <li className="text-slate-400">Driveway Cleaning</li>
              <li className="text-slate-400">Concrete & Pavers</li>
              <li className="text-slate-400">Deck & Patio Cleaning</li>
              <li className="text-slate-400">Fence Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:5552744487" className="hover:text-white transition-colors">
                  (555) 274-4487<br/>
                  <span className="text-sm text-slate-500">Available 8am - 6pm</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@brightsidepa.com" className="hover:text-white transition-colors">
                  info@brightsidepa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Serving all of Berks County, PA<br/>
                  <span className="text-sm text-slate-500">Locally Owned</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Brightside Property Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
