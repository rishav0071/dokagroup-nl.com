
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                alt="Construction Site 1" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-construction-900/80 to-construction-800/60 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                      Building Excellence, platform4nz Success
                    </h1>
                    <p className="text-white/90 text-xl mb-8">
                      Premier construction, professional manpower services, and artisanal bakery products.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="btn-primary">Get a Quote</Link>
                      <Link to="/about" className="bg-white hover:bg-white/90 text-construction-800 font-medium px-6 py-3 rounded-md transition-colors">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" 
                alt="Modern Buildings" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-construction-900/80 to-construction-800/60 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                      Creating Architectural Excellence
                    </h1>
                    <p className="text-white/90 text-xl mb-8">
                      Building tomorrow's landmarks with precision and innovation.
                    </p>
                    <Link to="/construction" className="btn-primary">View Projects</Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Construction Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-construction-900/80 to-construction-800/60 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                      Expert Teams at Your Service
                    </h1>
                    <p className="text-white/90 text-xl mb-8">
                      Professional manpower solutions for all your needs.
                    </p>
                    <Link to="/manpower" className="btn-primary">Our Team</Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-10" />
        <CarouselNext className="right-4 md:right-10" />
      </Carousel>
    </section>
  );
}
