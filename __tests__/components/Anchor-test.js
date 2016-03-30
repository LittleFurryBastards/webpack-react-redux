/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Anchor from '../../src/components/Anchor';

/* eslint-disable no-unused-vars */

jest.unmock('../../src/components/Anchor');

describe('Anchor Component', () => {
  it('should be an anchor HTML element', () => {
    let renderer = ReactTestUtils.createRenderer();

    renderer.render(<Anchor link="www" text="www" />)
    let output = renderer.getRenderOutput();

    expect(output.type).toBe('a');
  });
});
