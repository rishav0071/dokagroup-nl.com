
import {
    Award,
    Building,
    CheckCircle2,
    Shield,
    TrendingUp,
    Users
} from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-construction-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Platform4nz Group</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We combine industry expertise, quality service, and customer satisfaction to deliver exceptional results across all our business areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-primary mb-4">
              <Shield size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
            <p className="text-white/80">
              We maintain rigorous quality standards across all our services and products, ensuring consistent excellence.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-primary mb-4">
              <Award size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Industry Experience</h3>
            <p className="text-white/80">
              With decades of combined experience, our team brings unparalleled expertise to every project and service.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-primary mb-4">
              <Users size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Team</h3>
            <p className="text-white/80">
              Our skilled professionals are trained to deliver excellence, from construction workers to bakers.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-primary mb-4">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Reliability</h3>
            <p className="text-white/80">
              Count on us for timely delivery, consistent quality, and transparent communication at every stage.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-primary mb-4">
              <Building size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Solutions</h3>
            <p className="text-white/80">
              From construction to manpower to bakery, we offer integrated services under one trusted group.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-primary mb-4">
              <TrendingUp size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-white/80">
              We constantly evolve, incorporating the latest technologies and techniques across all our business areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
