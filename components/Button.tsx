import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'red' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  const baseClasses = "rounded-[clamp(0.75rem,0.65rem+0.5vw,0.875rem)] font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 relative overflow-hidden flex items-center justify-center gap-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base h-[50px]",
    lg: "px-8 py-4 text-lg h-[60px]",
  };

  // Replicating the provided CSS gradients and interactions
  const variantClasses = {
    primary: "bg-gradient-to-l from-[#1F274C] to-[#344079] hover:from-[#344079] hover:to-[#1F274C] text-white shadow-lg shadow-blue-900/20 bg-[length:200%_auto]",
    secondary: "bg-[#CCCCCC] text-[#222222] hover:bg-[#b3b3b3]",
    red: "bg-[#D64A2E] text-white hover:bg-[#b13c25]",
    outline: "border-2 border-[#1F274C] text-[#1F274C] hover:bg-[#1F274C] hover:text-white"
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;