import React from 'react';
import clsx from 'clsx';

const Card = ({ children, className = '', gradient = false }) => {
  if (gradient) {
    return (
      <div className={clsx('cf-gradient-border hover-lift', className)}>
        <div className="cf-card-inner p-5 md:p-6">{children}</div>
      </div>
    );
  }

  return (
    <div className={clsx('cf-card cf-card-hover p-5 md:p-6', className)}>
      {children}
    </div>
  );
};

export default Card;