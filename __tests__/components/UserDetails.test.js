import React from 'react';
import shallowRender from '../utils/shallowRender';

import UserDetails from '../../src/components/UserDetails';
jest.unmock('../../src/components/UserDetails');

describe('UserDetails Component', () => {
  it('should be an article HTML element', () => {
    const output = shallowRender(<UserDetails user={{}} />);

    expect(output.type).toBe('article');
  });

  it('should have a cssName of wrr-user-details', () => {
    const output = shallowRender(<UserDetails user={{}} />);

    expect(output.props.className).toBe('wrr-user-details');
  });
});
