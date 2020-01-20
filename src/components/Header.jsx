import React from 'react';
import styles from '../css/main.module.scss';

const Header = () => (
  <React.Fragment>
    <div className={styles.logo}>
      <img src="img/devjane.png" alt="" />
    </div>
    <button className={styles['nav-toggle']} type="button" aria-label="toggle navigation">
      <span className={styles.hamburger} />
    </button>
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}><a href="/index" className={styles.nav__link}>Home</a></li>
        <li className={styles.nav__item}>
          <a href="/services" className={styles.nav__link}>
My
          Services
          </a>
        </li>
        <li className={styles.nav__item}><a href="/about" className={styles.nav__link}>About me</a></li>
        <li className={styles.nav__item}><a href="/work" className={styles.nav__link}>My Work</a></li>
      </ul>
    </nav>
  </React.Fragment>
);

export default Header;
