
import { Car, Hammer, HardHat, Truck, User, Users, Utensils, Wrench } from "lucide-react";
import Layout from "../components/layout/Layout";
import CTASection from "../components/ui/CTASection";
import PageHeader from "../components/ui/PageHeader";
import ServiceCard from "../components/ui/ServiceCard";

export default function Manpower() {
  return (
    <Layout>
      <PageHeader 
        title="Manpower Services"
        subtitle="Providing skilled professionals across various industries."
      />
      
      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional <span className="text-primary">Manpower Solutions</span> for Your Business
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                dokagroup-nl Manpower provides reliable, skilled, and experienced workers across various industries, helping businesses meet their staffing needs efficiently.
              </p>
              <p className="text-gray-600 mb-8">
                Our extensive network of professional workers includes construction specialists, skilled tradespeople, hospitality staff, drivers, and more. We handle all aspects of workforce management, from recruitment and training to deployment and supervision, ensuring you get the right people for your specific requirements.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Construction Workers</div>
                  <div className="text-sm text-gray-600">Laborers, masons, carpenters</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Skilled Tradespeople</div>
                  <div className="text-sm text-gray-600">Plumbers, electricians, painters</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Hospitality Staff</div>
                  <div className="text-sm text-gray-600">Waiters, chefs, housekeeping</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Drivers & Operators</div>
                  <div className="text-sm text-gray-600">Truck drivers, equipment operators</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112c4e25a6" 
                    alt="Construction Workers" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f" 
                    alt="Professional Waiter" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc" 
                    alt="Skilled Tradesperson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646" 
                    alt="Professional Driver" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manpower Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide skilled professionals across various sectors, ensuring you have the right people for your specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Construction Workers"
              description="Skilled laborers, masons, carpenters, and other construction professionals for your building projects."
              icon={<HardHat size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Skilled Tradespeople"
              description="Expert plumbers, electricians, painters, and other tradespeople for specialized work."
              icon={<Wrench size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Hospitality Staff"
              description="Professional waiters, chefs, housekeeping, and other hospitality personnel for your establishment."
              icon={<Utensils size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Drivers & Operators"
              description="Experienced drivers for various vehicles and equipment operators for your transportation needs."
              icon={<Car size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Logistics Personnel"
              description="Warehouse staff, delivery personnel, and logistics professionals for your supply chain operations."
              icon={<Truck size={24} />}
              link="/contact"
            />
            
            <ServiceCard 
              title="Professional Services"
              description="Administrative staff, managers, and other professionals for your office and business operations."
              icon={<User size={24} />}
              link="/contact"
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Manpower Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with Doka for your manpower needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Skilled Professionals</h3>
              <p className="text-gray-600">
                Access to a pool of trained, experienced, and vetted workers who meet your specific requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                <HardHat size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexibility</h3>
              <p className="text-gray-600">
                Scale your workforce up or down based on project demands, without long-term commitments.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                <Hammer size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cost Efficiency</h3>
              <p className="text-gray-600">
                Reduce overhead costs related to recruitment, training, benefits, and HR management.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                All our personnel undergo rigorous screening, training, and regular performance evaluations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Management</h3>
              <p className="text-gray-600">
                We handle payroll, scheduling, compliance, and other administrative aspects of workforce management.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                <HardHat size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Immediate Deployment</h3>
              <p className="text-gray-600">
                Quick access to workers when you need them, minimizing downtime and project delays.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manpower Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the various categories of skilled professionals we provide across different sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112c4e25a6" 
                    alt="Construction Workers" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-3">Construction Workers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>General Laborers</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Masons & Bricklayers</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Carpenters & Joiners</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Steel Fixers & Concreters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e" 
                    alt="Skilled Tradespeople" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-3">Skilled Tradespeople</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Plumbers & Pipe Fitters</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Electricians</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Painters & Decorators</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>HVAC Technicians</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f" 
                    alt="Hospitality Staff" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-3">Hospitality Staff</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Waiters & Waitresses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Chefs & Kitchen Staff</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Housekeeping Personnel</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Front Desk & Reception</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646" 
                    alt="Drivers & Operators" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-3">Drivers & Operators</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Truck & Delivery Drivers</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Heavy Equipment Operators</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Forklift Operators</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Chauffeurs & Private Drivers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-construction-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Hear from businesses that have benefited from our manpower services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                The staff provided by Doka Manpower have been essential to our hotel operations. They are well-trained, reliable, and consistently deliver excellent service.
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
                  <div className="text-sm text-white/70">Operations Manager, Grand Hotel</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                We've been using Doka's skilled tradespeople for our renovation projects, and the quality of their work is exceptional. Their flexibility in scaling the workforce as needed has been invaluable.
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
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-sm text-white/70">Director, Urban Renovations</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                The drivers and logistics personnel from Doka have significantly improved our delivery operations. They are punctual, professional, and customer-focused.
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
                  <div className="text-sm text-white/70">Logistics Director, Metro Deliveries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Need Skilled Professionals for Your Business?"
        subtitle="Contact us today to discuss your manpower requirements and how we can help."
        buttonText="Get in Touch"
        buttonLink="/contact"
        bgColor="bg-construction-700"
      />
    </Layout>
  );
}
