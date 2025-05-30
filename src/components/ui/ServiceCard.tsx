
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  bgColor?: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  bgColor = "bg-white",
  image
}: ServiceCardProps) {
  return (
    <div className={`${bgColor} rounded-lg shadow-lg h-full transition-transform hover:-translate-y-1 hover:shadow-xl overflow-hidden`}>
      {image && (
        <div className="h-48 w-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="inline-flex items-center text-primary hover:underline font-medium">
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
