import Button from "./Button";

export default function CTA() {
  return (
    <section className="bg-rose-gold text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif mb-4">Ready to Find Your Digital Harmony?</h2>
        <p className="mb-8 max-w-xl mx-auto">Let&apos;s connect and explore how we can work together to create something beautiful and effective.</p>
        <Button>Schedule a Consultation</Button>
      </div>
    </section>
  );
}
