import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Wyomissing, PA",
      text: "Brightside did an incredible job on our vinyl siding and deck. It literally looks like a new house. The team was on time, professional, and very careful around our landscaping.",
    },
    {
      name: "Michael Torres",
      location: "Reading, PA",
      text: "I didn't realize how dirty our concrete driveway was until they cleaned it. The difference is night and day. Highly recommend their services to anyone in Berks county!",
    },
    {
      name: "David & Emily Roth",
      location: "Sinking Spring, PA",
      text: "We were getting ready to list our home for sale and hired Brightside for a full exterior wash. Best money we spent! The curb appeal went through the roof.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-secondary rounded-full opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Quote className="h-12 w-12 text-accent mx-auto mb-4 opacity-80" />
          <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">Customer Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Loved by homeowners in Berks County
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-lg font-medium leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-secondary/80 text-sm">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
