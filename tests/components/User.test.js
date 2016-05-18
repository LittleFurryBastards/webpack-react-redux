import React from 'react';
import expect from 'expect';

import shallowRender from '../utils/shallowRender';
import User from '../../src/components/User';

describe('User Component', () => {
  it('should be an article HTML element', () => {
    const output = shallowRender(<User />);

    expect(output.type).toBe('article');
  });

  it('should have a cssName of wrr-user', () => {
    const output = shallowRender(<User />);

    expect(output.props.className).toBe('wrr-user');
  });
});
