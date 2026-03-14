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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Everything you need for a <span className="text-primary">spotless exterior</span>
          </h3>
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
              className="bg-background rounded-2xl p-8 shadow-lg shadow-primary/5 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="h-16 w-16 rounded-xl bg-secondary/50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Commonly cleaned:</p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2" />
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
