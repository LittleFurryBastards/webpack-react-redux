import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Anchor from '../../src/components/Anchor';

jest.unmock('../../src/components/Anchor');

describe('Anchor Component', () => {
  it('should be an anchor HTML element', () => {
    const renderer = ReactTestUtils.createRenderer();

    renderer.render(<Anchor link="www" text="www" />);
    const output = renderer.getRenderOutput();

    expect(output.type).toBe('a');
  });
});
