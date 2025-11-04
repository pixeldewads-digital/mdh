interface CardProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export default function Card({ title, description, link, linkText = "Learn More" }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft transition-shadow duration-300 hover:shadow-md">
      <h3 className="text-2xl font-serif mb-2 text-rose-gold">{title}</h3>
      <p className="text-charcoal mb-4">{description}</p>
      {link && (
        <a href={link} className="text-warm-mocha hover:text-soft-gold transition-colors font-bold group">
          {linkText}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      )}
    </div>
  );
}
