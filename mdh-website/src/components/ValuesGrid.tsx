export default function ValuesGrid() {
  return (
    <section className="bg-blush-beige py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4 text-warm-mocha">Clarity</h3>
            <p className="text-charcoal">We believe in clear communication and transparent processes.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4 text-warm-mocha">Intention</h3>
            <p className="text-charcoal">Every decision is made with purpose and a focus on the end goal.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4 text-warm-mocha">Harmony</h3>
            <p className="text-charcoal">We strive to create a seamless balance between design and technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
