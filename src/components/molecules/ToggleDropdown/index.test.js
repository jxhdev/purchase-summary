import React from 'react';
import ToggleDropdown from './index';
import { shallow } from 'enzyme';

describe('testing LineItemWithToolTip', () => {
  let component = shallow(
    <ToggleDropdown title={'Show me'}>
      <h1>Hello world!</h1>
    </ToggleDropdown>
  );
  it('tests the toggle display by setting state and by clicking', () => {
    component.setState({ toggled: true });
    expect(component.find('h1').length).toBe(1);

    component.setState({ toggled: false });
    expect(component.find('h1').length).toBe(0);

    component.find('#test_click').simulate('click');
    expect(component.find('h1').length).toBe(1);

    component.find('#test_click').simulate('click');
    expect(component.find('h1').length).toBe(0);
  });
});
