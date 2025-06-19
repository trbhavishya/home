import React from 'react';
// import styles from '../css/main.module.scss';

const Introduction = () => (
  <React.Fragment>
    <section className={'intro'} id="home">
      <h1 className='section__title section__title--intro'>
        Hi, I am
        <hr />
        {' '}
        <strong>Bhavishya</strong>
      </h1>
      <p className='section__subtitle section__subtitle--intro'>Javascript dev</p>
      <img src={bhavishya} alt="" className={'intro__img'} />
    </section>
  </React.Fragment>
);

export default Introduction;
