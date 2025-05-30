
interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

export default function TestimonialCard({ quote, author, position, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex mb-4 items-center">
        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={author}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
}
