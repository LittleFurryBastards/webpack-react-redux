/* eslint-disable no-unused-vars */
import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import Anchor from './components/Anchor';
import Button from './components/Button';

/* eslint-disable no-unused-vars */

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <Anchor link="http://google.com" text="go to Google" />
    <Button text="delete" />
  </div>,
  document.getElementById('main')
);
