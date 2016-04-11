import './styles.less';
import React from 'react';

const Button = ({ handleClick, text }) => (
  <button className="react-button" onClick={handleClick}>{text}</button>
);

Button.propTypes = {
  handleClick: React.PropTypes.func,
  text: React.PropTypes.string
};

export default Button;
