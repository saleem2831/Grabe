import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Work from '../src/pages/work';
import Services from '../src/pages/services';
import Contact from '../src/pages/contact';
import Slide from '../src/pages/Sliders';
import Header2 from './header2';
import Test from './pages/testinomalslider';
import HeaderMain from './Header';
import SlideImage from './pages/slideimage';
import ScrollAnimation from './pages/animation';

const App = () => {
  return (
    <Router>
      {/* <Header2/> */}
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/slider" component={Slide}/>
        <Route path="/header2" component={Header2}/>
        <Route path="/testinomal" component={Test}/>
        <Route path="/HeaderMain" component={HeaderMain}/>
        <Route path="/slideImage" component={SlideImage}/>
        <Route path="/animate" component={ScrollAnimation}/>





      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
