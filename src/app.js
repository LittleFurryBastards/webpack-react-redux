import './index.html';
import ReactDOM from 'react-dom';

/* eslint-disable no-unused-vars */

import React from 'react';
import Anchor from './components/anchor';
import Button from './components/button';

/* eslint-disable no-unused-vars */

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <Anchor link="http://google.com" text="go to Google" />
    <Button text="delete" />
  </div>,
  document.getElementById('main')
);
