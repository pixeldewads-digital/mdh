import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-blush-beige text-charcoal shadow-soft">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-serif">MDH</div>
        <Navigation />
      </div>
    </header>
  );
}
