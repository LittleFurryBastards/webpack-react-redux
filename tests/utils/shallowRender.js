import ReactTestUtils from 'react-addons-test-utils';

const shallowRender = (component) => {
  const renderer = ReactTestUtils.createRenderer();

  renderer.render(component);

  return renderer.getRenderOutput();
};

export default shallowRender;
