
import { CheckCircle2, Clock, Mail, MapPin } from "lucide-react";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/ui/ContactForm";
import PageHeader from "../components/ui/PageHeader";

export default function Contact() {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with us for inquiries, quotes, or to discuss your requirements."
      />
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're interested in our construction services, manpower solutions, bakery products, or have general inquiries, we're here to help. Fill out the form, and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      Branch in Australia
                    </p>
                    <p className="text-gray-600">
                      Branch in Malta
                    </p>
                    <p className="text-gray-600">
                      Branch in Italy
                    </p>
                    <p className="text-gray-600">
                    New branch 31 Reagh Farms Road, Minto NSW , Australia
                    </p>
                    <p className="text-gray-600">
                    Northland address :- Longobardenweg PL Oss, Netherland
                    </p>
                    
                  </div>
                </div>
                
                {/* <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Main Office: (123) 456-7890<br />
                      Customer Service: (123) 456-7891
                    </p>
                  </div>
                </div> */}
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Addresses</h3>
                    <p className="text-gray-600">
                      General Inquiries: contact@dokagroup-nl.com<br />
                      {/* Customer Support: support@dokagroup-nl.com */}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                    <span>Expert team with decades of industry experience</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                    <span>Comprehensive solutions across construction, manpower, and bakery</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                    <span>Commitment to quality, reliability, and customer satisfaction</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-1" size={18} />
                    <span>Competitive pricing and transparent communication</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our main office or one of our locations throughout the city.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] w-full">
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Departments Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact the specific department that can best address your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-construction-800 text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Construction Division</h3>
              <p className="text-white/80 mb-6">
                For inquiries related to building construction, renovation, project management, and consulting.
              </p>
              <ul className="space-y-3 mb-6">
                {/* <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>(123) 456-7892</span>
                </li> */}
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>contact@dokagroup-nl.com</span>
                </li>
              </ul>
              <a 
                href="/construction" 
                className="inline-block bg-primary/20 hover:bg-primary/30 text-white px-4 py-2 rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>
            
            <div className="bg-construction-700 text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Manpower Division</h3>
              <p className="text-white/80 mb-6">
                For inquiries about manpower services, workforce recruitment, and staffing solutions.
              </p>
              <ul className="space-y-3 mb-6">
                {/* <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>(123) 456-7893</span>
                </li> */}
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>contact@dokagroup-nl.com</span>
                </li>
              </ul>
              <a 
                href="/manpower" 
                className="inline-block bg-primary/20 hover:bg-primary/30 text-white px-4 py-2 rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>
            
            <div className="bg-bakery-700 text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Bakery Division</h3>
              <p className="text-white/80 mb-6">
                For inquiries about bakery products, custom orders, wholesale supply, and catering.
              </p>
              <ul className="space-y-3 mb-6">
                {/* <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>(123) 456-7894</span>
                </li> */}
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>contact@dokagroup-nl.com</span>
                </li>
              </ul>
              <a 
                href="/bakery" 
                className="inline-block bg-primary/20 hover:bg-primary/30 text-white px-4 py-2 rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do I request a construction quote?</h3>
              <p className="text-gray-600">
                You can request a construction quote by filling out our contact form, calling our construction division, or visiting our office. We'll schedule a consultation to understand your requirements before providing a detailed quote.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">What types of manpower do you provide?</h3>
              <p className="text-gray-600">
                We provide a wide range of skilled workers, including construction workers, tradespeople, hospitality staff, drivers, logistics personnel, and office professionals. Contact our manpower division to discuss your specific needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you offer bakery wholesale services?</h3>
              <p className="text-gray-600">
                Yes, we offer wholesale bakery services for restaurants, cafes, hotels, and other businesses. Contact our bakery division to discuss product options, pricing, and delivery schedules.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
              <p className="text-gray-600">
                We primarily serve the New York metropolitan area, including Manhattan, Brooklyn, Queens, the Bronx, and neighboring counties. For projects or services outside this area, please contact us to discuss possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
