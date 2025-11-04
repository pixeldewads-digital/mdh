export default function Newsletter() {
  return (
    <section className="bg-rose-gold text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif mb-4">Stay in Harmony</h2>
        <p className="mb-8 max-w-xl mx-auto">Subscribe to our newsletter for insights on digital strategy, design, and calm productivity.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full max-w-sm p-3 rounded-l-lg text-charcoal"
          />
          <button type="submit" className="bg-deep-taupe text-white font-bold py-3 px-8 rounded-r-lg hover:bg-soft-gold transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
