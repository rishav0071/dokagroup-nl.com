
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import CTASection from "../components/ui/CTASection";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  return (
    <Layout>
      <PageHeader 
        title="Our Projects"
        subtitle="Explore our portfolio of successful construction projects and achievements."
      />
      
      {/* Projects Showcase */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Modern Office Complex"
              category="Commercial Construction"
              image="https://images.unsplash.com/photo-1481026469463-66327c86e544"
              link="/contact"
            />
            
            <ProjectCard 
              title="Luxury Residential Complex"
              category="Residential Construction"
              image="https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
              link="/contact"
            />
            
            <ProjectCard 
              title="Modern Industrial Facility"
              category="Industrial Construction"
              image="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7"
              link="/contact"
            />
            
            <ProjectCard 
              title="Hotel Renovation Project"
              category="Commercial Renovation"
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              link="/contact"
            />
            
            <ProjectCard 
              title="Community Center"
              category="Public Construction"
              image="https://images.unsplash.com/photo-1486718448742-163732cd1544"
              link="/contact"
            />
            
            <ProjectCard 
              title="Shopping Mall Development"
              category="Retail Construction"
              image="https://images.unsplash.com/photo-1539607277227-fd2f1fc7fc9e"
              link="/contact"
            />
            
            <ProjectCard 
              title="Healthcare Facility"
              category="Healthcare Construction"
              image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
              link="/contact"
            />
            
            <ProjectCard 
              title="High-Rise Residential Tower"
              category="Residential Construction"
              image="https://images.unsplash.com/photo-1545406596-d6c6cf5fd770"
              link="/contact"
            />
            
            <ProjectCard 
              title="Corporate Headquarters"
              category="Commercial Construction"
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              link="/contact"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a closer look at one of our most significant construction achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Modern Office Complex" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Modern Office Complex</h3>
              <p className="text-primary font-medium mb-6">Commercial Construction | New York</p>
              
              <p className="text-gray-600 mb-6">
                This state-of-the-art office complex was designed to provide a modern, flexible, and sustainable workspace for a leading technology company. The project involved the construction of a 15-story building with 200,000 square feet of office space, incorporating cutting-edge design and technology.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex">
                  <div className="w-1/3 font-bold">Client:</div>
                  <div className="w-2/3">TechInnovate Solutions</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 font-bold">Location:</div>
                  <div className="w-2/3">Manhattan, New York</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 font-bold">Completion:</div>
                  <div className="w-2/3">March 2023</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 font-bold">Project Value:</div>
                  <div className="w-2/3">$45 Million</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 font-bold">Services:</div>
                  <div className="w-2/3">Design, Construction, Project Management</div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-3">Project Highlights</h4>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>LEED Platinum certification for sustainable design and construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Smart building technology integration throughout the facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible workspace design to accommodate changing business needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Completed on schedule and within budget despite market challenges</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Project Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have extensive experience across various construction sectors and project types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b" 
                alt="Residential Construction" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Residential Construction</h3>
                <p className="mb-4 text-white/80">Luxury apartments, houses, and residential complexes</p>
                <a href="/contact" className="text-primary hover:underline font-medium">
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                alt="Commercial Construction" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Commercial Construction</h3>
                <p className="mb-4 text-white/80">Offices, retail spaces, and corporate buildings</p>
                <a href="/contact" className="text-primary hover:underline font-medium">
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7" 
                alt="Industrial Construction" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Industrial Construction</h3>
                <p className="mb-4 text-white/80">Factories, warehouses, and manufacturing facilities</p>
                <a href="/contact" className="text-primary hover:underline font-medium">
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                alt="Institutional Construction" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Institutional Construction</h3>
                <p className="mb-4 text-white/80">Schools, hospitals, and government buildings</p>
                <a href="/contact" className="text-primary hover:underline font-medium">
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1582586137143-bbd5d151612a" 
                alt="Renovation Projects" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Renovation Projects</h3>
                <p className="mb-4 text-white/80">Building renovations, remodeling, and retrofitting</p>
                <a href="/contact" className="text-primary hover:underline font-medium">
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f" 
                alt="Infrastructure Projects" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Infrastructure Projects</h3>
                <p className="mb-4 text-white/80">Roads, bridges, and civil engineering works</p>
                <a href="/contact" className="text-primary hover:underline font-medium">
                  View Projects
                </a>
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
