
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
}

export default function CTASection({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  bgColor = "bg-construction-800"
}: CTASectionProps) {
  return (
    <section className={`${bgColor} text-white py-16 md:py-20`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">{title}</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link 
          to={buttonLink} 
          className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
        >
          {buttonText}
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
