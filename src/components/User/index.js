import './user.less';

import React from 'react';
import { Link } from 'react-router';

import Thumbnail from '../Thumbnail';

const User = ({ color, id, name, companyName, phone }) => (
  <article className="wrr-user">
    <Thumbnail color={color} />
    <h1><Link to={`users/${id}`}>{name}</Link></h1>
    <p>Works at: {companyName}</p>
    <p>Phone: {phone}</p>
  </article>
);

User.propTypes = {
  color: React.PropTypes.string,
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  companyName: React.PropTypes.string,
  phone: React.PropTypes.string
};

export default User;
