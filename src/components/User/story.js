import React from 'react';
import { storiesOf } from '@kadira/storybook';

import User from './';

storiesOf('User', module)
  .add('with no props passed', () =>
    <User />
  )
  .add('with color set to #f00', () =>
    <User color="#f00" />
  )
  .add('with name set to Jeremy', () =>
    <User name="Jeremy" />
  )
  .add('with company name set to ACME', () =>
    <User companyName="ACME" />
  )
  .add('with phone set to 999-999-999', () =>
    <User phone="999-999-999" />
  )
  .add('with all props set', () =>
    <User color="#f00" name="Jeremy" companyName="ACME" phone="999-999-999" />
  );
