import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Thumbnail from '../../src/components/Thumbnail';

jest.unmock('../../src/components/Thumbnail');

describe('Thumbnail Component', () => {
  it('should be a div HTML element', () => {
    const renderer = ReactTestUtils.createRenderer();

    renderer.render(<Thumbnail />);
    const output = renderer.getRenderOutput();

    expect(output.type).toBe('div');
  });

  it('should have a cssName of wrr-thumbnail', () => {
    const renderer = ReactTestUtils.createRenderer();

    renderer.render(<Thumbnail />);
    const output = renderer.getRenderOutput();

    expect(output.props.className).toBe('wrr-thumbnail');
  });
});
