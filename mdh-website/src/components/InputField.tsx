interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

export default function InputField({ type, placeholder, name, required }: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className="w-full p-3 rounded-md bg-blush-beige border border-rose-gold text-charcoal placeholder-warm-mocha focus:outline-none focus:ring-2 focus:ring-soft-gold"
    />
  );
}
