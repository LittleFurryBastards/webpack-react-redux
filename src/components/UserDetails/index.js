import React from 'react';

const UserDetails = ({ user }) => (
  <article className="wrr-user-details">
    <h1>{ user.name } details:</h1>
    <p>Address: { user.address && user.address.street } { user.address && user.address.city }</p>
    <p>Phone: { user.phone }</p>
    <p>Website: { user.website }</p>
  </article>
);

UserDetails.propTypes = {
  user: React.PropTypes.object
};

export default UserDetails;
