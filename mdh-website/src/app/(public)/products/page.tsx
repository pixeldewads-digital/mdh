import KatalogGrid from "@/components/KatalogGrid";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

export default function ProductsPage() {
  return (
    <>
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-serif mb-4">Our Products</h1>
        <p className="text-xl max-w-2xl mx-auto text-charcoal">Tools and systems designed to bring harmony to your digital world.</p>
      </div>
      <KatalogGrid />
    </>
  );
}
