import React from 'react';
import { render } from 'enzyme';

import Kanban from '../';

test('render', () => {
  const tree = render(
    <Kanban
      width={1440}
      height={900}
      listWidth={200}
    />
  );

  expect(tree.html()).toMatchSnapshot();
});
