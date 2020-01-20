import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import MyServices from './MyServices';
import About from './About';

const Home = () => (
  <React.Fragment>
    <Introduction />
    <MyServices />
    <About />
  </React.Fragment>
);

export default Home;
