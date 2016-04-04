import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import Anchor from './components/Anchor/';
import Button from './components/Button/';

const app = (
  <div>
    <h1>Hello, world!</h1>
    <Anchor link="http://google.com" text="go to Google" />
    <Button text="delete" />
  </div>
);

ReactDOM.render(app, document.getElementById('main'));
