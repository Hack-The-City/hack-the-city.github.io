import React from 'react';
import {Router, Route} from 'react-router';
import ReactDOM frm 'react-dom';

// Import components
import Home from './components/home';

ReactDOM.render(
  <Router>
    <Route path="/" component={Home} />
  </Router>
);
