import { configure } from '@kadira/storybook';

function loadStories() {
  require('../__stories__/components/Buttons');
  // require as many as stories you need.
}

configure(loadStories, module);