import React from 'react';

function Button({variant = 'primary', children, ...props}) {
    const baseStyles = 'my-1 px-5 py-1.5 font-bold text-sm rounded-full shadow-md focus:outline-none';
    const variantStyles = {
      primary: 'drop-shadow rounded-md bg-gray-800 px-4  py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
      secondary: 'drop-shadow rounded-md bg-white px-4  py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
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



