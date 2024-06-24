import React from 'react';

function Button({variant = 'primary', children, ...props}) {
    const baseStyles = 'px-5 py-1.5 font-bold text-sm rounded-full shadow-md focus:outline-none';
    const variantStyles = {
      primary: 'bg-black text-white hover:bg-black/80',
      secondary: 'bg-white text-black hover:bg-gray-200'
    };
  
    const className = `${baseStyles} ${variantStyles[variant]}`;
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
}

export default Button;



