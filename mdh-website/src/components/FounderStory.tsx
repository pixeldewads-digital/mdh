export default function FounderStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="bg-blush-beige rounded-lg w-full h-80"></div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serif mb-4">A Note from Our Founder</h2>
          <p className="text-charcoal mb-4">
            &quot;We started MDH with a simple belief: that technology should feel less like a tool and more like a partner. Our journey has been about creating digital experiences that are not only effective but also calming and empowering for our clients.&quot;
          </p>
          <p className="font-bold text-warm-mocha"> - Founder&apos;s Name</p>
        </div>
      </div>
    </section>
  );
}
