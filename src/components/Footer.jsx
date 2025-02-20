import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lightestText">
          Designed & Built by Devesh Bansal
        </p>
        <p className="text-lightestText mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;