export default function FeaturedProducts() {
  return (
    <section className="bg-blush-beige py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Cards will be added here */}
          <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="text-2xl font-serif mb-2 text-rose-gold">Product One</h3>
            <p className="text-charcoal mb-4">A brief, enticing description of the product.</p>
            <a href="#" className="text-warm-mocha hover:text-soft-gold transition-colors">Learn More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="text-2xl font-serif mb-2 text-rose-gold">Product Two</h3>
            <p className="text-charcoal mb-4">A brief, enticing description of the product.</p>
            <a href="#" className="text-warm-mocha hover:text-soft-gold transition-colors">Learn More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="text-2xl font-serif mb-2 text-rose-gold">Product Three</h3>
            <p className="text-charcoal mb-4">A brief, enticing description of the product.</p>
            <a href="#" className="text-warm-mocha hover:text-soft-gold transition-colors">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
