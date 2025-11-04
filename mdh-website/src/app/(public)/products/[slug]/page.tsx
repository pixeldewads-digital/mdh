import { Metadata } from 'next';
import ProductHero from "@/components/ProductHero";
import ProblemSolution from "@/components/ProblemSolution";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: 'Product Detail',
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <ProductHero productName={params.slug.replace(/-/g, ' ')} />
      <ProblemSolution />
      <Pricing />
      <FAQ />
    </>
  );
}
