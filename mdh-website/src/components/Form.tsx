import InputField from "./InputField";
import Button from "./Button";

export default function Form() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-4xl font-serif text-center mb-12">Get in Touch</h2>
        <form className="space-y-6">
          <InputField type="text" name="name" placeholder="Your Name" required />
          <InputField type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-blush-beige border border-rose-gold text-charcoal placeholder-warm-mocha focus:outline-none focus:ring-2 focus:ring-soft-gold"
            rows={6}
          ></textarea>
          <div className="text-center">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
