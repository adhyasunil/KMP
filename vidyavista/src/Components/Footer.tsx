import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center py-3">
      <p>&copy; {new Date().getFullYear()} Your App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;