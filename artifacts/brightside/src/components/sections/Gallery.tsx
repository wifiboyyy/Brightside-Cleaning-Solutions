import { motion } from "framer-motion";
import { Sparkles, XCircle } from "lucide-react";

export function Gallery() {
  const comparisons = [
    { title: "Vinyl Siding", type: "house" },
    { title: "Concrete Driveway", type: "driveway" },
    { title: "Wood Deck", type: "deck" },
    { title: "Brick Patio", type: "patio" },
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={`${import.meta.env.BASE_URL}images/water-texture.png`}
          alt="Water texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Results</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Seeing is believing.
          </h3>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See the dramatic difference a professional cleaning makes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group"
            >
              <div className="relative h-64 sm:h-80 w-full flex">
                {/* Simulated "Before" Image using CSS */}
                <div className="w-1/2 h-full bg-slate-300 relative overflow-hidden flex flex-col items-center justify-center border-r-2 border-white z-10">
                  <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
                  <XCircle className="h-10 w-10 text-slate-500 mb-2 opacity-50" />
                  <span className="bg-black/60 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm z-10">
                    Before
                  </span>
                </div>
                
                {/* Simulated "After" Image using CSS */}
                <div className="w-1/2 h-full bg-gradient-to-br from-primary/10 to-secondary/30 relative overflow-hidden flex flex-col items-center justify-center">
                  <Sparkles className="h-10 w-10 text-primary mb-2 opacity-80" />
                  <span className="bg-primary/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm z-10">
                    After
                  </span>
                </div>
                
                {/* Center dividing line decoration */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white -ml-[2px] shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-30 text-primary border border-slate-200">
                  <span className="text-[10px] font-bold">VS</span>
                </div>
              </div>
              
              <div className="p-5 flex justify-between items-center bg-white">
                <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
                <div className="text-primary text-sm font-medium bg-primary/5 px-3 py-1 rounded-full">
                  Restored
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
