import React from 'react';

function Button({variant = 'primary', children, ...props}) {
    const baseStyles = 'my-1 px-5 py-1.5 font-bold text-sm rounded-full shadow-md focus:outline-none';
    const variantStyles = {
      primary: 'bg-black text-white hover:bg-black/80',
      secondary: 'bg-white text-black hover:bg-gray-200'
    };
    const click = props.onClick;
    const className = `${baseStyles} ${variantStyles[variant]} ${props.className}`;
    return (
        <button className={className} onClick={click}>
            {children}
        </button>
    );
}

export default Button;



