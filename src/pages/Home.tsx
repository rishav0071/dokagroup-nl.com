
import Layout from "../components/layout/Layout";
import CTASection from "../components/ui/CTASection";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import BakerySection from "../components/sections/BakerySection";
import ManpowerSection from "../components/sections/ManpowerSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Bakery Section */}
      <BakerySection />

      {/* Manpower Section */}
      <ManpowerSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your Next Project with Us?"
        subtitle="Contact us today for a free consultation and quote. Let's build something great together."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </Layout>
  );
}
