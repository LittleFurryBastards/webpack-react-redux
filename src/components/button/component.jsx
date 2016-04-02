import React from 'react';
import styles from './styles.css';

const Button = ({ handleClick, text }) =>
   <button className="react-button" onClick={handleClick}>{text}</button>;

export default Button;
