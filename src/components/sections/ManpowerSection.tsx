
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ManpowerSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
                  alt="Professional Workers" 
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1540496905036-5937c10647cc"
                  alt="Construction Team" 
                  className="rounded-lg shadow-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1540496905036-5937c10647cc"
                  alt="Skilled Labor" 
                  className="rounded-lg shadow-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
                  alt="Service Staff" 
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional <span className="text-primary">Manpower</span></h2>
            <p className="text-lg text-gray-700 mb-6">
              Access our extensive pool of skilled professionals ready to meet your workforce needs. From construction workers to hospitality staff, we provide reliable and experienced personnel.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Skilled Workers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Verified Staff</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Flexible Hiring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>24/7 Support</span>
              </div>
            </div>
            <Link to="/manpower" className="btn-primary">
              View Manpower Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
