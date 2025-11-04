import Card from "./Card";

const services = [
  {
    title: "Website Design & Development",
    description: "Creating beautiful, functional, and calm digital experiences.",
    link: "/services/web-design",
  },
  {
    title: "Digital Strategy Consulting",
    description: "Guiding your business to clarity and success in the digital landscape.",
    link: "/services/digital-strategy",
  },
  {
    title: "Content & Copywriting",
    description: "Crafting a clear and compelling message that resonates with your audience.",
    link: "/services/content-copywriting",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
