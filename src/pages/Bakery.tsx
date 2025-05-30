
import {
    Award,
    CakeSlice,
    Clock,
    Coffee,
    Cookie,
    Gift,
    ShoppingBag,
    Utensils
} from "lucide-react";
import Layout from "../components/layout/Layout";
import CTASection from "../components/ui/CTASection";
import PageHeader from "../components/ui/PageHeader";
import ServiceCard from "../components/ui/ServiceCard";

export default function Bakery() {
  return (
    <Layout>
      <PageHeader 
        title="Artisanal Bakery"
        subtitle="Handdokagroup-nled breads, pastries, and baked goods made with passion and tradition."
        background="bg-bakery-700"
      />
      
      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Delicious <span className="text-primary">Artisanal Creations</span> from Our Bakery
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                dokagroup-nl Bakery combines traditional baking techniques with modern creativity to produce exceptional breads, pastries, and baked goods that delight the senses.
              </p>
              <p className="text-gray-600 mb-8">
                Our master bakers use only the finest ingredients, sourced from trusted suppliers, to create products that stand out for their quality, flavor, and authenticity. From crusty artisanal breads to delicate pastries and celebration cakes, our bakery offers a diverse range of products for both retail customers and wholesale clients.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Artisanal Breads</div>
                  <div className="text-sm text-gray-600">Sourdough, baguettes, whole grain</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Pastries & Desserts</div>
                  <div className="text-sm text-gray-600">Croissants, cakes, cookies</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Specialty Items</div>
                  <div className="text-sm text-gray-600">Gluten-free, vegan options</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold mb-2">Wholesale Supply</div>
                  <div className="text-sm text-gray-600">Restaurants, cafes, hotels</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff" 
                    alt="Artisanal Bread" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907" 
                    alt="Fresh Pastries" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1505935428862-770b6f24f629" 
                    alt="Specialty Cakes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd" 
                    alt="Bakery Workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Bakery Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our range of handdokagroup-nled bakery products, made fresh daily with premium ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Artisanal Breads"
              description="Handdokagroup-nled sourdough, baguettes, whole grain, and specialty breads made using traditional techniques."
              icon={<CakeSlice size={24} />}
              link="/contact"
              bgColor="bg-bakery-50"
            />
            
            <ServiceCard 
              title="Pastries & Viennoiserie"
              description="Buttery croissants, pain au chocolat, danishes, and other delicate pastries baked to perfection."
              icon={<Cookie size={24} />}
              link="/contact"
              bgColor="bg-bakery-50"
            />
            
            <ServiceCard 
              title="Cakes & Desserts"
              description="Celebration cakes, tarts, éclairs, and other desserts for special occasions and everyday indulgence."
              icon={<Utensils size={24} />}
              link="/contact"
              bgColor="bg-bakery-50"
            />
            
            <ServiceCard 
              title="Cookies & Small Treats"
              description="Cookies, brownies, muffins, and other small treats perfect for snacking and sharing."
              icon={<Coffee size={24} />}
              link="/contact"
              bgColor="bg-bakery-50"
            />
            
            <ServiceCard 
              title="Specialty & Dietary Options"
              description="Gluten-free, vegan, and other specialty items catering to various dietary preferences and requirements."
              icon={<Award size={24} />}
              link="/contact"
              bgColor="bg-bakery-50"
            />
            
            <ServiceCard 
              title="Wholesale Supply"
              description="Bulk orders for restaurants, cafes, hotels, and other businesses requiring quality baked goods."
              icon={<ShoppingBag size={24} />}
              link="/contact"
              bgColor="bg-bakery-50"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular bakery creations that our customers love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545401049-ecd5f55e6a7d" 
                  alt="Sourdough Bread" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Bestseller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Artisanal Sourdough</h3>
                <p className="text-gray-600 mb-4">
                  Our signature sourdough bread, made with a 24-hour fermentation process for exceptional flavor and texture.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">$6.95</span>
                  <button className="bg-bakery-100 hover:bg-bakery-200 text-bakery-800 px-4 py-2 rounded-md font-medium transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" 
                  alt="Croissants" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Butter Croissants</h3>
                <p className="text-gray-600 mb-4">
                  Flaky, buttery croissants made using traditional French techniques with premium ingredients.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">$3.50 each</span>
                  <button className="bg-bakery-100 hover:bg-bakery-200 text-bakery-800 px-4 py-2 rounded-md font-medium transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587" 
                  alt="Birthday Cake" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Custom
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Celebration Cakes</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, customized cakes for birthdays, weddings, and special occasions, tailored to your preferences.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">From $35.00</span>
                  <button className="bg-bakery-100 hover:bg-bakery-200 text-bakery-800 px-4 py-2 rounded-md font-medium transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Baking Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the care, expertise, and tradition behind every product we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-bakery-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-3">Select Ingredients</h3>
                <p className="text-gray-600">
                  We source the finest quality ingredients, from organic flour to farm-fresh eggs and premium butter.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-16 h-1 bg-bakery-600 -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-bakery-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-3">Traditional Methods</h3>
                <p className="text-gray-600">
                  We employ time-honored baking techniques, including slow fermentation for our breads and lamination for pastries.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-16 h-1 bg-bakery-600 -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-bakery-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-3">Expert dokagroup-nlsmanship</h3>
                <p className="text-gray-600">
                  Our master bakers shape and finish each product by hand, ensuring consistent quality and artisanal appearance.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-16 h-1 bg-bakery-600 -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                <div className="bg-bakery-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">4</div>
                <h3 className="text-xl font-bold mb-3">Fresh Daily</h3>
                <p className="text-gray-600">
                  We bake fresh every day, ensuring our customers receive products at their peak of freshness and flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Bakery Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our regular products, we offer specialized services to meet various needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bakery-50 rounded-lg p-8 text-center">
              <div className="bg-bakery-600 text-white p-4 rounded-full inline-block mb-4">
                <Gift size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Orders</h3>
              <p className="text-gray-600 mb-6">
                Order custom cakes, pastries, and other baked goods for special occasions, corporate events, or personal celebrations.
              </p>
              <a href="/contact" className="text-bakery-700 hover:underline font-medium">Learn More</a>
            </div>
            
            <div className="bg-bakery-50 rounded-lg p-8 text-center">
              <div className="bg-bakery-600 text-white p-4 rounded-full inline-block mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Wholesale Supply</h3>
              <p className="text-gray-600 mb-6">
                Partner with us for wholesale bakery products for your restaurant, cafe, hotel, or retail business at competitive prices.
              </p>
              <a href="/contact" className="text-bakery-700 hover:underline font-medium">Learn More</a>
            </div>
            
            <div className="bg-bakery-50 rounded-lg p-8 text-center">
              <div className="bg-bakery-600 text-white p-4 rounded-full inline-block mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Subscriptions</h3>
              <p className="text-gray-600 mb-6">
                Sign up for regular deliveries of your favorite bread and pastries, ensuring you never run out of fresh baked goods.
              </p>
              <a href="/contact" className="text-bakery-700 hover:underline font-medium">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-bakery-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Hear from those who have enjoyed our bakery products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                Their artisanal breads are exceptional - the sourdough has the perfect crust and a complex, tangy flavor that's unmatched anywhere else in the city.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Michael Brown</div>
                  <div className="text-sm text-white/70">Restaurant Owner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                The celebration cake they made for my daughter's wedding was not only beautiful but also delicious. Our guests couldn't stop talking about it.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Jennifer Davis</div>
                  <div className="text-sm text-white/70">Wedding Client</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-4xl font-serif">"</div>
              </div>
              <p className="text-white/90 italic mb-6">
                As a cafe owner, I rely on consistent quality for my business. Doka Bakery delivers excellent products on time, every time. Their wholesale service is impeccable.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Robert Wilson</div>
                  <div className="text-sm text-white/70">Cafe Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Ready to Order Our Bakery Products?"
        subtitle="Contact us to place your order, inquire about wholesale options, or discuss custom creations."
        buttonText="Order Now"
        buttonLink="/contact"
        bgColor="bg-bakery-700"
      />
    </Layout>
  );
}
