import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; 
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
