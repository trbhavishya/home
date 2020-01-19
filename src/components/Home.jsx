import React from 'react';

const Home = () => (
  <div>
    <section className="intro">
      <h1 className="section__title section__title--intro">
                    The title
        {' '}
        <strong>of my project</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
      <img src="img/portfolio-01.jpg" alt="" className="intro__img" />
    </section>
  </div>
);

export default Home;
