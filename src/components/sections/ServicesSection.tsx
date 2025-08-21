
import {
    Building,
    CakeSlice,
    Hammer,
    HardHat,
    TrendingUp,
    Users
} from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a diverse range of services, from construction excellence to skilled manpower and artisanal bakery products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Construction Services"
            description="From residential buildings to commercial complexes, we handle all types of construction projects with precision and excellence."
            icon={<Building size={24} />}
            link="/construction"
            bgColor="bg-white"
            image="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
          />
          
          <ServiceCard 
            title="Building Renovation"
            description="Transform and modernize your existing structures with our comprehensive renovation and remodeling services."
            icon={<Hammer size={24} />}
            link="/construction"
            bgColor="bg-white"
            image="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          />
          
          <ServiceCard 
            title="Manpower Services"
            description="Access our pool of skilled workers, including drivers, painters, plumbers, waiters, and more for your business needs."
            icon={<Users size={24} />}
            link="/manpower"
            bgColor="bg-white"
            image="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
          />
          
          <ServiceCard 
            title="Project Management"
            description="Professional oversight of your projects, ensuring they are completed on time, within budget, and to specification."
            icon={<HardHat size={24} />}
            link="/construction"
            bgColor="bg-white"
            image="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          />
          
          <ServiceCard 
            title="Fresh Bakery Products"
            description="Delight in our artisanal breads, pastries, and baked goods, dokagroup-nled with premium ingredients and traditional techniques."
            icon={<CakeSlice size={24} />}
            link="/bakery"
            bgColor="bg-white"
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          />
          
          <ServiceCard 
            title="Business Consulting"
            description="Expert advice and strategies to optimize your construction, manpower, or food service operations."
            icon={<TrendingUp size={24} />}
            link="/contact"
            bgColor="bg-white"
            image="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
          />
        </div>
      </div>
    </section>
  );
}
