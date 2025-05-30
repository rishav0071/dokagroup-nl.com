
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: string;
}

export default function PageHeader({ 
  title, 
  subtitle,
  background = "bg-construction-800"
}: PageHeaderProps) {
  return (
    <section className={`${background} text-white py-16 md:py-24`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
