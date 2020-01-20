import React from 'react';
import styles from '../css/main.module.scss';

const About = () => (
  <React.Fragment>
    <section className={styles['about-me']} id="about">
      <h2 className={`${styles.section__title} ${styles['section__title--about']}`}>Who I am</h2>
      <p className={`${styles.section__subtitle} ${styles['section__subtitle--about']}`}>
        Developer with expertise on Javascript
      </p>
      <div className={styles['about-me__body']}>
        <p>
          More than 3 years of experience as a Full Stack Web Developer, with expertise on client
          side using JavaScript frameworks such as React.js, Angular and on server side with Node.js
          and Vert.x Java
        </p>
        <p>
          Experienced Full Stack Engineer with a demonstrated history of working in the financial
          services industry. Skilled in JavaScript and Java with strong expertise on framework like
          React js, Node js, Angular, Vert.x.
        </p>
      </div>
      <img alt="" className={styles['about-me__img']} />
    </section>
  </React.Fragment>
);

export default About;
