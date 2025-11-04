import Gallery from "@/components/Gallery";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function PortfolioPage() {
  return (
    <>
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-serif mb-4">Our Work</h1>
        <p className="text-xl max-w-2xl mx-auto text-charcoal">A selection of projects that showcase our commitment to quality and craftsmanship.</p>
      </div>
      <Gallery />
      <CaseStudyDetail />
    </>
  );
}
