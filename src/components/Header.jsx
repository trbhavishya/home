import React from 'react';

const Header = () => (
  <React.Fragment>
    <div className={'logo'} />
    <button className='nav-toggle' type="button" aria-label="toggle navigation">
      <span className='hamburger' />
    </button>
    <nav className='nav'>
      <ul className={'nav__list'}>
        <li className={'nav__item'}><a href="/index" className={styles.nav__link}>Home</a></li>
        <li className={'nav__item'}>
          <a href="/services" className={'nav__link'}>
My
          Services
          </a>
        </li>
        <li className={'nav__item'}><a href="/about" className={'nav__link'}>About me</a></li>
        <li className={'nav__item'}><a href="/work" className={'nav__link'}>My Work</a></li>
      </ul>
    </nav>
  </React.Fragment>
);

export default Header;
