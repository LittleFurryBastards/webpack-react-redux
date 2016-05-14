import React from 'react';
import shallowRender from '../utils/shallowRender';

import Thumbnail from '../../src/components/Thumbnail';
jest.unmock('../../src/components/Thumbnail');

describe('Thumbnail Component', () => {
  it('should be a div HTML element', () => {
    const output = shallowRender(<Thumbnail />);

    expect(output.type).toBe('div');
  });

  it('should have a cssName of wrr-thumbnail', () => {
    const output = shallowRender(<Thumbnail />);

    expect(output.props.className).toBe('wrr-thumbnail');
  });
});
