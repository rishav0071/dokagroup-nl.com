
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-construction-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">
              <span className="text-primary">DOKA</span>
              <span>GROUP</span>
            </h3>
            <p className="mb-6 text-gray-300">
              Building your dreams with excellence and integrity. Providing superior construction services, skilled manpower, and delicious bakery products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-bold mb-6">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/construction" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Construction Services
                </Link>
              </li>
              <li>
                <Link to="/manpower" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Manpower Services
                </Link>
              </li>
              <li>
                <Link to="/bakery" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Bakery Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-bold mb-6">Contact Information</h6>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">Branch in Australia</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">Branch in Malta</span>
              </li>

               <li className="flex">
                <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">Branch in Italy</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">New branch 31 Reagh Farms Road, Minto NSW , Australia</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">Northland address :- Longobardenweg PL Oss, Netherlands</span>
              </li>
              
              {/* <li className="flex">
                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li> */}
              <li className="flex">
                <Mail size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">contact@dokagroup-nl.com</span>
              </li>
              <li className="flex">
                <Clock size={20} className="mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-300">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h6 className="text-lg font-bold mb-6">Newsletter</h6>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our latest projects and offers.
            </p>
            <form>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-construction-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Doka Group. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
