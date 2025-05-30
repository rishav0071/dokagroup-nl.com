
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function BakerySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Artisanal <span className="text-primary">Bakery</span></h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience the aroma and taste of freshly baked goods platform4nzed with passion and expertise. Our bakery offers a wide range of artisanal breads, pastries, and specialty items.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Artisanal Recipes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Custom Orders</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-primary mr-2" size={20} />
                <span>Quality Ingredients</span>
              </div>
            </div>
            <Link to="/bakery" className="btn-primary">
              Explore Our Bakery
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="Fresh Bread" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
                alt="Pastries" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f"
                alt="Bakery Interior" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1612203985729-70726954388c"
                alt="Artisan Baker" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
