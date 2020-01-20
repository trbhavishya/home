import React from 'react';
import styles from '../css/main.module.scss';
import gnana from './img/Gnana.jpg';

const Introduction = () => (
  <React.Fragment>
    <section className={styles.intro} id="home">
      <h1 className={`${styles.section__title} ${styles['section__title--intro']}`}>
        Hi, I am
        <hr />
        {' '}
        <strong>Gnanadeep</strong>
      </h1>
      <p className={`${styles.section__subtitle} ${styles['section__subtitle--intro']}`}>Javascript dev</p>
      <img src={gnana} alt="" className={styles.intro__img} />
    </section>
  </React.Fragment>
);

export default Introduction;
