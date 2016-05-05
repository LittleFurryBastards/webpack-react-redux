import './user-container.less';

import axios from 'axios';
import React from 'react';

import User from '../User';

const UserContainer = React.createClass({
  getInitialState() {
    return {
      users: []
    };
  },
  render() {
    console.warn('Rendering UserContainer');

    return (
      <section className="wrr-user-container">
        { this.state.users.map(this.createUser) }
      </section>
    );
  },
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => this.setState({ users: response.data }));
  },
  createUser(user) {
    return (
      <User
        key={user.id}
        color={`#${user.id}${user.id}${user.id}`}
        id={user.id}
        name={user.name}
        companyName={user.company.name}
        phone={user.phone} />
    );
  }
});

UserContainer.propTypes = {
  color: React.PropTypes.string,
  name: React.PropTypes.string,
  companyName: React.PropTypes.string,
  phone: React.PropTypes.string
};

export default UserContainer;
