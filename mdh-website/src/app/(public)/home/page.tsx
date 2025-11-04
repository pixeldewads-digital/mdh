import Hero from "@/components/Hero";
import PillarsGrid from "@/components/PillarsGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import FounderStory from "@/components/FounderStory";
import Newsletter from "@/components/Newsletter";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsGrid />
      <FeaturedProducts />
      <FounderStory />
      <Newsletter />
    </>
  );
}
