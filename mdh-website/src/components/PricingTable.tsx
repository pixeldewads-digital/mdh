interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isFeatured: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Essential",
    price: "$99",
    features: ["Feature A", "Feature B", "Feature C"],
    isFeatured: false,
  },
  {
    name: "Premium",
    price: "$199",
    features: ["Feature A", "Feature B", "Feature C", "Feature D"],
    isFeatured: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: ["All Features", "Dedicated Support", "Custom Integrations"],
    isFeatured: false,
  },
];

export default function PricingTable() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Flexible Pricing for Your Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`p-8 rounded-lg ${tier.isFeatured ? 'bg-rose-gold text-white' : 'bg-white shadow-soft'}`}>
              <h3 className="text-3xl font-serif mb-4">{tier.name}</h3>
              <p className="text-4xl font-bold mb-6">{tier.price}</p>
              <ul className="space-y-2 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`${tier.isFeatured ? 'bg-white text-rose-gold' : 'bg-rose-gold text-white'} font-bold py-3 px-8 rounded-lg w-full hover:bg-soft-gold transition-colors`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
