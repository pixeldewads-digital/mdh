import Story from "@/components/Story";
import ValuesGrid from "@/components/ValuesGrid";
import Timeline from "@/components/Timeline";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <Story />
      <ValuesGrid />
      <Timeline />
    </>
  );
}
