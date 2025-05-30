
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to <span className="text-primary">Doka Group</span></h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 25 years of industry experience, Doka Group has established itself as a leader in construction, manpower services, and specialty bakery products.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to excellence, attention to detail, and customer-centric approach have made us the preferred choice for clients across various sectors. We pride ourselves on our skilled team, innovative solutions, and unwavering dedication to delivering quality in every project and product.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Quality Assurance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Timely Delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Competitive Pricing</span>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-block bg-construction-800 hover:bg-construction-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  alt="Construction Site" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  alt="Professional Workers" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                  alt="Bakery Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                  alt="Building Construction" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
