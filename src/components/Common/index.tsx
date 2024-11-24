interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    type?: 'button' | 'submit';
    className?: string;
  }
  
  const Button = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    disabled = false,
    type = 'button',
    className = ''
  }: ButtonProps) => {
    const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${className} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;