import { motion } from "framer-motion";
import { Droplets, Home as HomeIcon, Map as Pathway } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "House Washing",
      icon: <HomeIcon className="h-8 w-8" />,
      description: "Safely remove green algae, dirt, and grime from your home's siding using our low-pressure soft wash method.",
      includes: ["Vinyl Siding", "Stucco", "Brick", "Gutters & Soffits"]
    },
    {
      title: "Driveway & Concrete",
      icon: <Pathway className="h-8 w-8" />,
      description: "Restore your concrete to its original bright color with professional high-pressure surface cleaning.",
      includes: ["Concrete Driveways", "Sidewalks", "Walkways", "Pavers"]
    },
    {
      title: "Deck & Patio Cleaning",
      icon: <Droplets className="h-8 w-8" />,
      description: "Revitalize your outdoor living spaces. We safely clean wood, composite, and stone surfaces.",
      includes: ["Wood Decks", "Composite Decking", "Stone Patios", "Pool Decks"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Golden yellow top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f5a623] via-[#fbbf24] to-[#f5a623]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#f5a623]/10 text-[#d4880f] text-sm font-bold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0f2472] mb-4">
            Everything you need for a <span className="text-[#f5a623]">spotless exterior</span>
          </h3>
          <div className="w-16 h-1 bg-[#f5a623] rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            We use top-of-the-line equipment and eco-friendly solutions to deliver stunning results without damaging your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#f5a623]/40 transition-all duration-300 group"
            >
              <div className="h-16 w-16 rounded-xl bg-[#f5a623]/10 flex items-center justify-center text-[#0f2472] mb-6 group-hover:bg-[#f5a623] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-3 text-[#0f2472] group-hover:text-[#f5a623] transition-colors">
                {service.title}
              </h4>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-semibold text-[#0f2472] mb-3">Commonly cleaned:</p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-[#f5a623] mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
