export default function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Our Journey</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="border-l-2 border-rose-gold absolute h-full left-3"></div>
          <div className="mb-8 pl-12">
            <h3 className="text-2xl font-serif text-warm-mocha">2020 - The Idea</h3>
            <p className="text-charcoal">MDH was founded with the mission to harmonize digital experiences.</p>
          </div>
          <div className="mb-8 pl-12">
            <h3 className="text-2xl font-serif text-warm-mocha">2021 - First Project</h3>
            <p className="text-charcoal">We launched our first major project, setting the standard for our work.</p>
          </div>
          <div className="mb-8 pl-12">
            <h3 className="text-2xl font-serif text-warm-mocha">2023 - Growing the Team</h3>
            <p className="text-charcoal">Our team expanded, bringing in new skills and perspectives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
