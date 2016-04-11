import React from 'react';
import Anchor from './Anchor';
import Button from './Button';

const App = () => (
  <div>
    <h1>Hello, world!</h1>
    <Anchor link="http://google.com" text="This is a link component" />
    <br />
    <Button text="This is a button component" />
  </div>
);

export default App;
