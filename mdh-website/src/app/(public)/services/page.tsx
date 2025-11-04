import ServiceGrid from "@/components/ServiceGrid";
import PricingTable from "@/components/PricingTable";
import CTA from "@/components/CTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <>
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-serif mb-4">Our Services</h1>
        <p className="text-xl max-w-2xl mx-auto text-charcoal">Providing clarity and expertise to elevate your digital presence.</p>
      </div>
      <ServiceGrid />
      <PricingTable />
      <CTA />
    </>
  );
}
