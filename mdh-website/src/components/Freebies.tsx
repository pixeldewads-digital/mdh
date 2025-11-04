export default function Freebies() {
  return (
    <section className="bg-blush-beige py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif mb-8">Free Resources</h2>
        <p className="text-xl max-w-2xl mx-auto text-charcoal mb-8">A collection of free resources to help you on your digital journey.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h3 className="text-2xl font-serif mb-4 text-rose-gold">Digital Harmony Checklist</h3>
            <p className="text-charcoal mb-4">A step-by-step guide to creating a more harmonious digital presence.</p>
            <a href="#" className="text-warm-mocha hover:text-soft-gold transition-colors font-bold">Download Now</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h3 className="text-2xl font-serif mb-4 text-rose-gold">Mindful Productivity Planner</h3>
            <p className="text-charcoal mb-4">A printable planner to help you stay focused and intentional.</p>
            <a href="#" className="text-warm-mocha hover:text-soft-gold transition-colors font-bold">Download Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
