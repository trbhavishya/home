import React from 'react';
import styles from '../css/introduction.module.scss';

const MyServices = () => (
  <React.Fragment>
    <section className={styles['my-services']} id="services">
      <h2 className={`${styles.section__title} ${styles['section__title--services']}`}>What I do</h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <h3>Front End</h3>
          <p>
            Worked on frontend javascript frameworks such as React and Angular.
            Developed new user-facing features using React Js(Hooks)
            and building reusable components for future use.
          </p>
        </div>
        <div className={styles.service}>
          <h3>Node</h3>
          <p>
            Developed server-side code in Node with Express Framework. Ensured all code with 100%
            test coverage using jest framework
          </p>
        </div>
        <div className={styles.service}>
          <h3>Java Vert.x</h3>
          <p>
            Experience with Reactive frameworks vert.x to achieve better fault isolation and
            scalability
          </p>
        </div>
      </div>
      {/* <a href="#work" className={styles.btn}>My Work</a> */}
    </section>
  </React.Fragment>
);

export default MyServices;
