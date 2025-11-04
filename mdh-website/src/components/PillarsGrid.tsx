export default function PillarsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Four Pillars of Digital Harmony</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-soft text-center">
            <h3 className="text-2xl font-serif mb-4 text-warm-mocha">Strategy</h3>
            <p className="text-charcoal">Clarity in purpose and direction is the foundation of a strong digital presence.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-soft text-center">
            <h3 className="text-2xl font-serif mb-4 text-warm-mocha">Design</h3>
            <p className="text-charcoal">We create beautiful, intuitive interfaces that resonate with your audience.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-soft text-center">
            <h3 className="text-2xl font-serif mb-4 text-warm-mocha">Technology</h3>
            <p className="text-charcoal">Robust and scalable solutions that power your digital ambitions.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-soft text-center">
            <h3 className="text-2xl font-serif mb-4 text-warm-mocha">Growth</h3>
            <p className="text-charcoal">Data-driven insights to foster continuous improvement and expansion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
