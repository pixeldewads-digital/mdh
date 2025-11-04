import Card from "./Card";

const products = [
  {
    title: "Digital Harmony Suite",
    description: "An all-in-one solution for managing your digital presence with ease.",
    link: "/products/digital-harmony-suite",
  },
  {
    title: "Calm Analytics",
    description: "Understand your audience without the noise of complex dashboards.",
    link: "/products/calm-analytics",
  },
  {
    title: "Focused Flow Planner",
    description: "A productivity tool designed to help you find your focus and flow.",
    link: "/products/focused-flow-planner",
  },
];

export default function KatalogGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
