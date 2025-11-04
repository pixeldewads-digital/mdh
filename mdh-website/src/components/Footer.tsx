export default function Footer() {
  return (
    <footer className="bg-deep-taupe text-blush-beige p-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-serif mb-4">MDH</h3>
          <p className="text-sm">Calm confidence, soft premium, human precision.</p>
        </div>
        <div>
          <h3 className="text-lg font-serif mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/home" className="hover:text-rose-gold transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-rose-gold transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-rose-gold transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-serif mb-4">Connect</h3>
          <p className="text-sm">hello@mdh.system</p>
        </div>
      </div>
      <div className="text-center text-xs mt-8 pt-4 border-t border-warm-mocha">
        <p>&copy; {new Date().getFullYear()} MDH. All rights reserved.</p>
      </div>
    </footer>
  );
}
