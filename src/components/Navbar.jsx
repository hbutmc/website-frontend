// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>HBUTMC</Link>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={styles.link}>主页</Link></li>
          <li><Link to="/docs" className={styles.link}>文档站</Link></li>
          <li><Link to="/gallery" className={styles.link}>画廊</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
