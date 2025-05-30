
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-construction-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            {/* <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>(123) 456-7890</span>
            </a> */}
            <a href="mailto:contact@dokagroup-nl.com" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Mail size={14} />
              <span>contact@dokagroup-nl.com</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Careers</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-heading font-bold">
            <span className="text-primary">DOKA</span>
            <span className="text-construction-800"></span>
          </Link>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 font-medium hover:text-primary transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
                <div className="py-2">
                  <Link to="/construction" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">
                    Construction
                  </Link>
                  <Link to="/manpower" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">
                    Manpower Services
                  </Link>
                  <Link to="/bakery" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">
                    Bakery
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/projects" className="font-medium hover:text-primary transition-colors">Projects</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
            {/* <Link to="/contact" className="btn-primary">Get a Quote</Link> */}
          </nav>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-construction-800 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-primary mt-1">
                    <Link 
                      to="/construction" 
                      className="block hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Construction
                    </Link>
                    <Link 
                      to="/manpower" 
                      className="block hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Manpower Services
                    </Link>
                    <Link 
                      to="/bakery" 
                      className="block hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Bakery
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/projects" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
