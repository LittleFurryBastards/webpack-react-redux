import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <h1>Hello, world!</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/anchor">Anchor component</Link></li>
        <li><Link to="/button">Button component</Link></li>
      </ul>
    </nav>
    { children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
