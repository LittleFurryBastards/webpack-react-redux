import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Thumbnail from './';

storiesOf('Thumbnail', module)
  .add('with default color', () =>
    <Thumbnail />
  )
  .add('with color set to #f00', () =>
    <Thumbnail color="#f00" />
  );
