import './user-container.less';

import React from 'react';

import User from '../User';
import { getUsers } from '../../actions';
import store from '../../store';

const UserContainer = React.createClass({
  getInitialState() {
    return {
      users: store.getState().users
    };
  },
  render() {
    return (
      <section className="wrr-user-container">
        { this.state.users.map(this.createUser) }
      </section>
    );
  },
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ users: store.getState().users }));
    getUsers();
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
  },
  componentWillUnmount() {
    this.unsubscribe();
  }
});

export default UserContainer;
