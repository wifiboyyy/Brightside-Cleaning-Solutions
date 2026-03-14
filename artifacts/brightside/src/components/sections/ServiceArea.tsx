import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

export function ServiceArea() {
  const towns = [
    "Reading", "Wyomissing", "Sinking Spring", "Shillington", 
    "Kutztown", "Hamburg", "Fleetwood", "Birdsboro", 
    "Boyertown", "Morgantown", "Leesport", "Oley"
  ];

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-secondary/30 text-primary rounded-xl mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Proudly Serving <span className="text-primary">Berks County</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                As a locally owned and operated business, we take pride in beautifying our community. We provide fast, reliable service across the entire Berks County region. 
              </p>
              
              <p className="font-bold text-slate-800 mb-4">Popular service areas include:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                {towns.map((town) => (
                  <div key={town} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span className="font-medium">{town}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 inline-block">
                <p className="text-sm text-slate-600 italic">
                  * Don't see your town? If you're in or near Berks County, we likely cover your area. Contact us to verify!
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square max-w-md mx-auto"
            >
              {/* map abstract representation since we can't easily embed a real map safely without keys */}
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-slate-300 to-slate-200" />
                
                {/* Abstract map pins */}
                <div className="relative w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                    >
                      <MapPin className="h-6 w-6 text-primary drop-shadow-md" fill="white" />
                    </motion.div>
                  ))}
                  
                  {/* Central big pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                      <MapPin className="h-12 w-12 text-primary relative z-10" fill="white" />
                    </div>
                    <span className="mt-2 font-bold text-primary bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-sm">
                      Berks County
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
