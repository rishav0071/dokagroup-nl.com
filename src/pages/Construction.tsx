
import { Building, Hammer, HardHat, Ruler, TrendingUp, Truck } from "lucide-react";
import Layout from "../components/layout/Layout";
import CTASection from "../components/ui/CTASection";
import PageHeader from "../components/ui/PageHeader";
import ServiceCard from "../components/ui/ServiceCard";

export default function Construction() {
  return (
    <Layout>
      <PageHeader 
        title="Construction Services"
        subtitle="Building excellence with precision, quality, and innovation."
      />
      
      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert <span className="text-primary">Construction Solutions</span> for Every Need
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                dokagroup-nl Construction delivers comprehensive construction services for residential, commercial, and industrial projects, ensuring quality, timeliness, and excellence.
              </p>
              <p className="text-gray-600 mb-8">
                With decades of experience and a team of skilled professionals, we handle projects of all sizes and complexities. From initial design to final inspection, we maintain the highest standards, using quality materials and innovative techniques to create structures that stand the test of time.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Residential Construction</div>
                  <div className="text-sm text-gray-600">Homes, apartments, renovations</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Commercial Construction</div>
                  <div className="text-sm text-gray-600">Offices, retail, hospitality</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Industrial Construction</div>
                  <div className="text-sm text-gray-600">Factories, warehouses, facilities</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Infrastructure Projects</div>
                  <div className="text-sm text-gray-600">Roads, bridges, utilities</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" 
                    alt="Building Construction" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" 
                    alt="Construction Site" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1590725140246-20acddc1fb82" 
                    alt="Building Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                    alt="Construction Workers" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of construction services to meet your specific needs, all delivered with the highest standards of quality and professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Building Construction"
              description="Complete construction services for residential, commercial, and industrial buildings, from foundation to finishing."
              icon={<Building size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Renovation & Remodeling"
              description="Transform and modernize existing structures with our comprehensive renovation and remodeling services."
              icon={<Hammer size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Project Management"
              description="Expert oversight of your construction projects, ensuring they are completed on time, within budget, and to specification."
              icon={<HardHat size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Architectural Design"
              description="Creative and functional architectural designs that align with your vision, needs, and budget."
              icon={<Ruler size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Construction Consulting"
              description="Professional advice and strategies to optimize your construction projects and operations."
              icon={<TrendingUp size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Material Supply"
              description="Supply of quality construction materials for your projects, ensuring availability and timely delivery."
              icon={<Truck size={24} />}
              link="/contact"
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures smooth execution and successful completion of every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-3">Consultation & Planning</h3>
                <p className="text-gray-600">
                  We begin with a thorough consultation to understand your requirements, vision, and budget. Our team then develops a comprehensive plan for your project.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-16 h-1 bg-primary -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-3">Design & Engineering</h3>
                <p className="text-gray-600">
                  Our architects and engineers create detailed designs and blueprints, ensuring structural integrity, functionality, and adherence to building codes.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-16 h-1 bg-primary -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-3">Construction Execution</h3>
                <p className="text-gray-600">
                  Our skilled team executes the construction according to the approved plans, maintaining quality standards and safety protocols throughout.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-16 h-1 bg-primary -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">4</div>
                <h3 className="text-xl font-bold mb-3">Quality Inspection & Handover</h3>
                <p className="text-gray-600">
                  Upon completion, we conduct thorough quality inspections before the final handover, ensuring everything meets our high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our notable construction projects that showcase our expertise and quality workmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1481026469463-66327c86e544" 
                  alt="Modern Office Building" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Modern Office Complex</h3>
                  <p>Commercial Construction</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A state-of-the-art office complex featuring contemporary design, energy-efficient systems, and flexible workspaces for a corporate client.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Location: New York</span>
                  <span>Completed: 2023</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e" 
                  alt="Luxury Residential Complex" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Luxury Residential Complex</h3>
                  <p>Residential Construction</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A premium residential development featuring 50 luxury apartments with high-end finishes, amenities, and scenic views.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Location: Miami</span>
                  <span>Completed: 2022</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7" 
                  alt="Industrial Facility" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Modern Industrial Facility</h3>
                  <p>Industrial Construction</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A cutting-edge industrial facility featuring advanced manufacturing spaces, storage solutions, and administrative offices.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Location: Chicago</span>
                  <span>Completed: 2023</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/projects" className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors inline-block">
              View All Projects
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-construction-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with Doka Construction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                Doka Construction delivered our office building on time and within budget. Their attention to detail and professionalism was impressive throughout the entire process.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Robert Johnson</div>
                  <div className="text-sm text-white/70">CEO, Johnson Enterprises</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                We've worked with many construction companies, but Doka stands out for their quality, reliability, and transparent communication. They truly exceeded our expectations.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sarah Williams</div>
                  <div className="text-sm text-white/70">Property Developer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                The renovation of our hotel was a complex project, but Doka handled it with expertise and minimal disruption to our operations. We're extremely satisfied with the results.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">David Chen</div>
                  <div className="text-sm text-white/70">Hotel General Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your Construction Project?"
        subtitle="Contact us today for a consultation and free quote. Let's bring your vision to life."
        buttonText="Get a Quote"
        buttonLink="/contact"
      />
    </Layout>
  );
}
