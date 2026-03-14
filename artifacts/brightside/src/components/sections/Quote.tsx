import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateQuote } from "@/hooks/use-quote";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { QuoteRequestService } from "@workspace/api-client-react";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.nativeEnum(QuoteRequestService, {
    errorMap: () => ({ message: "Please select a service type" })
  }),
  address: z.string().min(5, "Please provide your property address"),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function Quote() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate, isPending, error } = useCreateQuote();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = (data: QuoteFormValues) => {
    mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      },
    });
  };

  return (
    <section id="quote" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Left side - Information */}
          <div className="lg:w-5/12 bg-primary p-12 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-6">Get Your Free Quote Today</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Fill out the form with your details and what you need cleaned. We'll get back to you within 24 hours with a personalized estimate.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <p className="font-medium text-lg">Request a quote</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <p className="font-medium text-lg">Approve the estimate</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <p className="font-medium text-lg">Enjoy a clean home</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-7/12 p-8 lg:p-12">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="text-3xl font-display font-bold text-slate-800 mb-4">Request Sent!</h4>
                <p className="text-slate-600 text-lg max-w-md">
                  Thank you for reaching out. We have received your request and will contact you shortly with your free estimate.
                </p>
                <Button 
                  className="mt-8" 
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                    <p className="text-sm font-medium">Failed to submit request. Please try again or call us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input
                      id="name"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input
                      id="phone"
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Needed *</label>
                  <select
                    id="service"
                    {...register("service")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.service ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all appearance-none`}
                  >
                    <option value="">Select a service...</option>
                    <option value={QuoteRequestService.house_washing}>House Washing</option>
                    <option value={QuoteRequestService.driveway_cleaning}>Driveway & Concrete Cleaning</option>
                    <option value={QuoteRequestService.deck_patio_cleaning}>Deck & Patio Cleaning</option>
                    <option value={QuoteRequestService.other}>Multiple / Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-semibold text-slate-700">Property Address *</label>
                  <input
                    id="address"
                    {...register("address")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.address ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                    placeholder="123 Main St, Reading, PA"
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Additional Details</label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-all resize-none"
                    placeholder="Tell us a bit more about the job..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg h-14"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
                
                <p className="text-center text-xs text-slate-500 mt-4">
                  By submitting this form, you agree to be contacted regarding your service request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
