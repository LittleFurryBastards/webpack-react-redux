import React from 'react';

import UserDetails from '../UserDetails';
import { getUserDetails } from '../../actions';
import store from '../../store';

const UserDetailsContainer = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },
  getInitialState() {
    return {
      currentUser: store.getState().currentUser
    };
  },
  render() {
    return (
      <UserDetails user={this.state.currentUser} />
    );
  },
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ currentUser: store.getState().currentUser }));
    getUserDetails(this.props.params.id);
  },
  componentWillUnmount() {
    this.unsubscribe();
  }
});

export default UserDetailsContainer;
