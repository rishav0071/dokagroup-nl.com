
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, category, image, link }: ProjectCardProps) {
  return (
    <Link to={link} className="group block overflow-hidden rounded-lg shadow-lg h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="text-sm text-primary font-medium mb-1">{category}</p>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
