jest.unmock('../../src/components/UserDetails');
jest.unmock('../../src/components/UserDetailsContainer');

import React from 'react';
import shallowRender from '../utils/shallowRender';
import ReactTestUtils from 'react-addons-test-utils';

import { getUserDetails } from '../../src/actions';
import store from '../../src/store';
import UserDetails from '../../src/components/UserDetails';
import UserDetailsContainer from '../../src/components/UserDetailsContainer';

describe('UserDetailsContainer Component', () => {
  it('should output a UserDetails component', () => {
    const output = shallowRender(<UserDetailsContainer />);

    expect(output.type).toBe(UserDetails);
  });

  it('should pass the currentUser to UserDetails component', () => {
    const user = {
      id: 212,
      phone: 212212212,
      website: 'test.test.test'
    };

    store.setCurrentUser(user);

    const output = shallowRender(<UserDetailsContainer />);

    expect(output.props.user).toEqual(user);
  });

  it('should call getUserDetails with the supplied id', () => {
    const params = { id: 1 };

    ReactTestUtils.renderIntoDocument(<UserDetailsContainer params={params} />);

    expect(getUserDetails.mock.calls.length).toBe(1); // eslint-disable-line
    expect(getUserDetails).toBeCalledWith(params.id);
  });
});
