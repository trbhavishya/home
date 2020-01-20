import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import MyServices from './MyServices';
import About from './About';
import Footer from './Footer';

const Home = () => (
  <React.Fragment>
    <Header />
    <Introduction />
    <MyServices />
    <About />
    <Footer />
  </React.Fragment>
);

export default Home;
