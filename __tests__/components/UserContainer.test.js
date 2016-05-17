jest.unmock('../../src/components/UserContainer');

import React from 'react';
import shallowRender from '../utils/shallowRender';

import store from '../../src/store';
import User from '../../src/components/User';
import UserContainer from '../../src/components/UserContainer';

describe('UserContainer Component', () => {
  it('should be an section HTML element', () => {
    const output = shallowRender(<UserContainer />);

    expect(output.type).toBe('section');
  });

  it('should have a cssName of wrr-user-container', () => {
    const output = shallowRender(<UserContainer />);

    expect(output.props.className).toBe('wrr-user-container');
  });

  it('should render no users when not passed', () => {
    const output = shallowRender(<UserContainer />);

    expect(output.props.children.length).toBe(0); // eslint-disable-line
  });

  it('should render 2 users', () => {
    store.setUsers([
      {
        id: 1,
        name: 'a',
        company: { name: 'aa' },
        phone: 1
      },
      {
        id: 2,
        name: 'b',
        company: { name: 'bb' },
        phone: 2
      }
    ]);

    const output = shallowRender(<UserContainer />);
    const users = output.props.children.filter((child) => child.type === User);

    expect(users.length).toBe(2); // eslint-disable-line
  });

  it('should pass id, name, companyName and phone to User', () => {
    const user = {
      id: 1,
      name: 'AA',
      company: { name: 'ACB' },
      phone: 1234
    };

    store.setUsers([user]);

    const output = shallowRender(<UserContainer />);

    expect(output.props.children[0].props.id).toBe(user.id); // eslint-disable-line
    expect(output.props.children[0].props.name).toBe(user.name); // eslint-disable-line
    expect(output.props.children[0].props.companyName).toBe(user.company.name); // eslint-disable-line
    expect(output.props.children[0].props.phone).toBe(user.phone); // eslint-disable-line
  });
});
