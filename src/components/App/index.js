import './app.less';

import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <section className="wrr-app">
    <header className="wrr-app__header">
      <h1><Link to="/">User Information</Link></h1>
    </header>
    { children }
  </section>
);

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
