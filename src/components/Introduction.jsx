import React from 'react';
import styles from '../css/main.scss';

const Introduction = () => (
  <React.Fragment>
    <section className={styles.intro} id="home">
      <h1 className={styles['section__title section__title--intro']}>
        Hi, I am
        {' '}
        <strong>Gnanadeep</strong>
      </h1>
      <p className={styles['section__subtitle section__subtitle--intro']}>front-end dev</p>
      <img src="img/gnana-1.jpg" alt="" className={styles.intro__img} />
    </section>
  </React.Fragment>
);

export default Introduction;
