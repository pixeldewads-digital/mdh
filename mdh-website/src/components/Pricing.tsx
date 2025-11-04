import Button from "./Button";

export default function Pricing() {
  return (
    <section className="bg-blush-beige py-20">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl font-serif mb-8">Pricing</h2>
        <div className="bg-white p-8 rounded-lg shadow-soft">
          <p className="text-5xl font-bold text-rose-gold mb-4">$49</p>
          <p className="text-charcoal mb-8">Per month, billed annually.</p>
          <Button>Get Started Now</Button>
        </div>
      </div>
    </section>
  );
}
