
import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experiences working with dokagroup-nl Group.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Doka Group delivered our office building renovation project on time and within budget. Their attention to detail and professionalism was impressive throughout the process."
            author="Robert Johnson"
            position="CEO, Johnson Enterprises"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          />
          
          <TestimonialCard 
            quote="The manpower services provided by Doka Group have been essential to our hotel operations. Their staff is well-trained, reliable, and consistently delivers excellent service."
            author="Sarah Williams"
            position="Operations Manager, Grand Hotel"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          />
          
          <TestimonialCard 
            quote="Their bakery products are simply outstanding. The quality and taste of their artisanal breads have made them our exclusive supplier for all our restaurant locations."
            author="Michael Brown"
            position="Restaurant Chain Owner"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          />
        </div>
      </div>
    </section>
  );
}
