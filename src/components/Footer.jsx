import React from 'react';
import styles from '../css/main.module.scss';

const Footer = () => (
  <React.Fragment>
    <footer className={styles.footer}>
      <a href="mailto:gnanadeep4@gmail.com" className={styles.footer__link}>gnanadeep4@gmail.com</a>
      <ul className={styles['social-list']}>
        <li className={styles['social-list__item']}>
          <a className={styles['social-list__link']} href="https://www.linkedin.com/in/gnanadeep/">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li className={styles['social-list__item']}>
          <a className={styles['social-list__link']} href="https://github.com/gnanadeep">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </footer>
  </React.Fragment>
);

export default Footer;
