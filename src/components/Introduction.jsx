import React from 'react';
// import styles from '../css/main.module.scss';
import gnana from './img/Gnana.jpg';

const Introduction = () => (
  <React.Fragment>
    <section className={'intro'} id="home">
      <h1 className='section__title section__title--intro'>
        Hi, I am
        <hr />
        {' '}
        <strong>Gnanadeep</strong>
      </h1>
      <p className='section__subtitle section__subtitle--intro'>Javascript dev</p>
      <img src={gnana} alt="" className={'intro__img'} />
    </section>
  </React.Fragment>
);

export default Introduction;
