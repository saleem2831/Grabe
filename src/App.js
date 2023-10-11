import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Work from '../src/pages/work';
import Services from '../src/pages/services';
import Contact from '../src/pages/contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
