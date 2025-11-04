import Form from "@/components/Form";
import PartnerInvite from "@/components/PartnerInvite";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <>
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-serif mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto text-charcoal">We&apos;d love to hear from you. Whether you have a question, a project idea, or just want to say hello, feel free to reach out.</p>
      </div>
      <Form />
      <PartnerInvite />
    </>
  );
}
