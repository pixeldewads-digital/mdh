interface ProductHeroProps {
  productName: string;
}

export default function ProductHero({ productName }: ProductHeroProps) {
  return (
    <section className="bg-blush-beige text-charcoal py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-serif mb-4 capitalize">{productName}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">A brief, compelling tagline for the product.</p>
      </div>
    </section>
  );
}
