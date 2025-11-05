import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable Button component with calm-premium gradient style.
 * Supports all standard <button> attributes including `type`, `onClick`, `disabled`, etc.
 */
export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`bg-gradient-to-r from-[#D8A29A] to-[#CBB279] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:from-[#CBB279] hover:to-[#EDD7D2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CBB279] ${className}`}
    >
      {children}
    </button>
  );
}
