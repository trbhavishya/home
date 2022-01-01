import React from 'react';
import ReactGA from 'react-ga';
import styles from '../css/main.module.scss';

const Footer = () => (
  <React.Fragment>
    <footer className={styles.footer}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:gnanadeep4@gmail.com"
        className={styles.footer__link}
        onClick={() => ReactGA.event({
          category: 'email',
          action: 'User pressed email link',
        })}
      >
gnanadeep4@gmail.com
      </a>
      <ul className={styles['social-list']}>
        <li className={styles['social-list__item']}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={styles['social-list__link']}
            href="https://www.linkedin.com/in/gnanadeep/"
            onClick={() => ReactGA.event({
              category: 'linkedin',
              action: 'User pressed linkedin link',
            })}
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li className={styles['social-list__item']}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={styles['social-list__link']}
            href="https://github.com/gnanadeep"
            onClick={() => ReactGA.event({
              category: 'github',
              action: 'User pressed Github link',
            })}
          >
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </footer>
  </React.Fragment>
);

export default Footer;
