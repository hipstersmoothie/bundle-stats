import React from 'react';
import { storiesOf } from '@storybook/react';

import { IconText } from '.';

const stories = storiesOf('IconText', module);

stories.add('default', () => (
  <IconText glyph="branch">
    #010211
  </IconText>
));
