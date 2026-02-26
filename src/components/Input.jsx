import React from 'react';

const Input = ({ label, helperText, className = '', id, ...props }) => {
  const inputId = id || (label ? `field-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={className}>
      <div className="cf-field">
        <input
          id={inputId}
          placeholder={label}
          className="cf-field-input peer"
          {...props}
        />
        {label && (
          <label htmlFor={inputId} className="cf-field-label">
            {label}
          </label>
        )}
      </div>
      {helperText && (
        <p className="mt-1 text-xs text-slate-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;