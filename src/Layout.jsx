// src/components/Layout.jsx
import React from 'react';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="app" style={{ paddingTop: '100px' }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;