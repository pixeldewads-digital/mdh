import Blog from "@/components/Blog";
import Freebies from "@/components/Freebies";
import Newsletter from "@/components/Newsletter";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
};

export default function ResourcesPage() {
  return (
    <>
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-serif mb-4">Resources</h1>
        <p className="text-xl max-w-2xl mx-auto text-charcoal">Insights, tools, and resources to help you on your digital journey.</p>
      </div>
      <Blog />
      <Freebies />
      <Newsletter />
    </>
  );
}
