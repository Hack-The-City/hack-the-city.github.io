import React, {Component} from 'react';

// Custom components
import Base from './base';
import Nav from './nav';
import Splash from './splash';
import About from './about';
import FAQ from './faq';
import Sponsors from './sponsors';
import Footer from './footer';

export default class Home extends Component {
  render() {
    return (
      <Base>
        <Nav />
        <Splash />
        <About />
        <FAQ />
        <Sponsors />
        <Footer />
      </Base>
    );
  }
}
