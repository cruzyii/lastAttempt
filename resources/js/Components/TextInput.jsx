import React, { forwardRef, useEffect, useRef } from 'react';

const TextInput = forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, onSubmit = null, value, onChange, ...props },
    ref
  ) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
            value={value}
            onChange={onChange}
        />
    );
});
export default TextInput;