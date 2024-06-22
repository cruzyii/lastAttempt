import React from 'react';

function Button({children, className}) {
    return (
        <>
            <button className={`bg-black text-white font-bold py-2 px-4 rounded-full ${className} hover:bg-black/80`}>{children}</button>
        </>
    );
}

export default Button;