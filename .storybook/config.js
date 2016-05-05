import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Thumbnail/story');
  require('../src/components/User/story');
}

configure(loadStories, module);
