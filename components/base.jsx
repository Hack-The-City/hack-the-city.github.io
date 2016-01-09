import React, {Component} from 'react';

// Custom components
// import Nav from './nav';
// import Footer from './footer';

export default class Base extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
