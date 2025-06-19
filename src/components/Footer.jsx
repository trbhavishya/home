import React from 'react';
import ReactGA from 'react-ga';

const Footer = () => (
  <React.Fragment>
    <footer className={'footer'}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:trbhavishya@gmail.com"
        className={'footer__link'}
        onClick={() => ReactGA.event({
          category: 'email',
          action: 'User pressed email link',
        })}
      >
trbhavishya@gmail.com
      </a>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className='social-list__link'
            href="https://www.linkedin.com/in/trbhavishya/"
            onClick={() => ReactGA.event({
              category: 'linkedin',
              action: 'User pressed linkedin link',
            })}
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li className={'social-list__item'}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className='social-list__link'
            href="https://github.com/trbhavishya"
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
