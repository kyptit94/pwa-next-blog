import React from 'react';
import navInterface from './nav.interface';

const Nav: React.FC<navInterface> = ({ className, children }) => {
  return (
    <nav className={className}>
      {children}
    </nav>
  );
};

export default Nav;