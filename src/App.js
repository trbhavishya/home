import React from 'react';
import Helmet from 'react-helmet';
import Home from './components/Home';
import ReactGA from 'react-ga';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebaseConfig';

function App() {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  ReactGA.initialize('UA-000000-01');
  ReactGA.pageview(window.location.pathname + window.location.search);
  ReactGA.ga('send', 'pageview', '/');

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bhavishya</title>
        <link rel="canonical" href="https://trbhavishya.github.io/home/" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bhavishya Portfolio Website</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
          integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700|Roboto+Slab:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
