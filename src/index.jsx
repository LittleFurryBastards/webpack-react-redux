import React from 'react';
import ReactDOM from 'react-dom';
import Anchor from './components/Anchor/component.jsx';
import Button from './components/Button/component.jsx';

const app = <div>
  <h1>Hello, world!</h1>
  <Anchor link="http://google.com" text="go to Google" />
  <Button text="delete" />
</div>;

ReactDOM.render(app, document.getElementById('main'));
