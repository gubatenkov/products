import React from 'react';

const Button = ({ className, children, ...rest }) => {
  return (
    <button className={className ? `btn ${className}` : 'btn'} {...rest}>
      {children}
    </button>
  );
};

export default Button;
