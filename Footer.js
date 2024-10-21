// Footer component
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center">
      <div className="container p-4">
        <p>&copy; {new Date().getFullYear()} Themezy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
