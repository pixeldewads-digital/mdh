export default function ProblemSolution() {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-4 text-rose-gold">The Problem</h2>
          <p className="text-charcoal">A clear and concise description of the problem the product solves.</p>
        </div>
        <div>
          <h2 className="text-4xl font-serif mb-4 text-soft-gold">The Solution</h2>
          <p className="text-charcoal">How the product addresses the problem in a unique and effective way.</p>
        </div>
      </div>
    </section>
  );
}
