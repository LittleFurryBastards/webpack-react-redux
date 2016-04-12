import React from 'react';
import Button from '../components/Button';

const ButtonRoute = () => (
  <Button
    handleClick={ () => alert('Button component') }
    text="This is the button component" />
);

export default ButtonRoute;
