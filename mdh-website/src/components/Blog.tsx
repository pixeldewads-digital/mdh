import Card from "./Card";

const posts = [
  {
    title: "Finding Calm in a Chaotic Digital World",
    description: "Tips and strategies for creating a more focused and intentional online experience.",
    link: "/resources/finding-calm",
  },
  {
    title: "The Power of Human-Centered Design",
    description: "Why empathy and understanding are the keys to creating successful digital products.",
    link: "/resources/human-centered-design",
  },
  {
    title: "A Guide to Mindful Productivity",
    description: "How to get more done with less stress and more focus.",
    link: "/resources/mindful-productivity",
  },
];

export default function Blog() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">From the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
