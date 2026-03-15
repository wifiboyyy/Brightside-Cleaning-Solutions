import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  const scrollToQuote = () => {
    document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Clean house exterior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2472]/95 via-[#0f2472]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/10" />
      </div>

      {/* Golden yellow accent bar at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f5a623] via-[#fbbf24] to-[#f5a623] z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <span className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-[#f5a623] text-[#f5a623]" />)}
              </span>
              <span className="text-sm font-medium">Berks County's Top Rated</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Bring Back Your Home's <span className="text-[#f5a623] drop-shadow-md">Bright Side.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-xl font-medium drop-shadow-md">
              Professional, reliable pressure washing and exterior cleaning services in Berks County, PA. We remove years of dirt, grime, and mold in hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#f5a623] hover:bg-[#e09510] text-[#0f2472] font-bold text-lg border-0 shadow-lg shadow-[#f5a623]/30"
                onClick={scrollToQuote}
                data-testid="button-get-free-quote-hero"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/40 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
                onClick={scrollToServices}
                data-testid="button-view-services-hero"
              >
                View Our Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#f5a623]" />
                Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#f5a623]" />
                100% Satisfaction
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#f5a623]" />
                Eco-Friendly
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
