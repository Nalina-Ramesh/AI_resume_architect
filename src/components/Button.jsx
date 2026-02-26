import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'cf-btn-primary',
  secondary: 'cf-btn-ghost',
  outline: 'cf-btn-outline'
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      className={clsx('cf-btn cf-btn-ripple', variants[variant] || variants.primary, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;