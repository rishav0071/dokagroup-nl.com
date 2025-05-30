
import { Award, Building, CakeSlice, CheckCircle2, Clock, UserCheck, Users } from "lucide-react";
import Layout from "../components/layout/Layout";
import CTASection from "../components/ui/CTASection";
import PageHeader from "../components/ui/PageHeader";

export default function About() {
  return (
    <Layout>
      <PageHeader 
        title="About Doka Group"
        subtitle="Building excellence across construction, manpower, and bakery industries."
      />
      
      {/* Company History */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-primary">Journey</span></h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1995, Doka Group began as a small construction company with a vision to deliver quality and excellence in every project.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we expanded our services to include manpower solutions, recognizing the industry's need for skilled and reliable workers. In 2005, we ventured into the bakery sector, bringing the same commitment to quality and excellence.
              </p>
              <p className="text-gray-600 mb-6">
                Today, Doka Group stands as a diversified enterprise, serving clients across multiple sectors while maintaining our core values of integrity, quality, and customer satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Skilled Workers</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                  alt="Company History" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                {/* <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                    alt="Construction Project" 
                    className="w-48 h-48 object-cover rounded"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by strong values and a clear vision, we strive to be leaders in all our business domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver exceptional quality and service in construction, manpower, and bakery sectors, exceeding client expectations while maintaining the highest standards of integrity and professionalism.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>Providing superior construction services that stand the test of time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>Supplying skilled and reliable manpower across various industries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>dokagroup-nl bakery products that deliver exceptional taste and quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>Building lasting relationships with clients through trust and excellence</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the most trusted and respected group in our industries, recognized for our unwavering commitment to quality, innovation, and customer satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>Becoming the preferred construction partner for complex projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>Setting the industry standard for professional manpower services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>Expanding our bakery brand to be recognizable nationwide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                  <span>Creating sustainable growth while maintaining our core values</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and define our corporate culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from construction projects to bakery products.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices at all times.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, ensuring timely completion and consistent quality.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and methods to improve our services and products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company to success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Mitchell</h3>
                <p className="text-primary mb-4">CEO & Founder</p>
                <p className="text-gray-600 mb-4">
                  With over 30 years in the industry, David leads the group with vision and expertise.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Construction Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary mb-4">Construction Director</p>
                <p className="text-gray-600 mb-4">
                  Sarah oversees all construction projects, ensuring quality and timely delivery.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
                  alt="Manpower Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
                <p className="text-primary mb-4">Manpower Operations Manager</p>
                <p className="text-gray-600 mb-4">
                  Michael leads our manpower division, ensuring we provide skilled and reliable workers.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65" 
                  alt="Bakery Head" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Emma Wilson</h3>
                <p className="text-primary mb-4">Head of Bakery Division</p>
                <p className="text-gray-600 mb-4">
                  Emma brings culinary expertise to our bakery operations, creating delicious products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Companies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Business Divisions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Doka Group operates through three main business divisions, each specializing in distinct sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-construction-800 text-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" 
                  alt="Construction Division" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building size={24} className="text-primary mr-2" />
                  <h3 className="text-xl font-bold">Doka Construction</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Our construction division handles projects of all sizes, from residential buildings to commercial complexes, with precision and excellence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Building Construction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Renovation & Remodeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Infrastructure Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Project Management</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-construction-700 text-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Manpower Division" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users size={24} className="text-primary mr-2" />
                  <h3 className="text-xl font-bold">Doka Manpower</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Our manpower division provides skilled and reliable workers across various sectors, ensuring businesses have the right people for their needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Construction Workers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Skilled Tradespeople</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Hospitality Staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Professional Services</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-bakery-700 text-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff" 
                  alt="Bakery Division" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <CakeSlice size={24} className="text-primary mr-2" />
                  <h3 className="text-xl font-bold">Doka Bakery</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Our bakery division produces a wide range of artisanal breads, pastries, and baked goods, dokagroup-nled with premium ingredients and traditional techniques.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Artisanal Breads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Pastries & Desserts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Wholesale Supplies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={16} />
                    <span>Custom Orders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Want to Join Our Team?"
        subtitle="We're always looking for talented professionals to join the Doka family."
        buttonText="View Careers"
        buttonLink="/contact"
      />
    </Layout>
  );
}
