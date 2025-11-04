interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-rose-gold to-soft-gold text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:from-soft-gold hover:to-blush-beige ${className}`}
    >
      {children}
    </button>
  );
}
