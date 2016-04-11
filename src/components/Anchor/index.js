import React from 'react';

const Anchor = ({ link, text }) => (
  <a href={link}>{text}</a>
);

Anchor.propTypes = {
  link: React.PropTypes.string,
  text: React.PropTypes.string
};

export default Anchor;
