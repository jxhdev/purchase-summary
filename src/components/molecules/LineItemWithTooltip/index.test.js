import React from 'react';
import LineItemWithTooltip from './index';
import { shallow, mount } from 'enzyme';

describe('LineItemWithToolTip', () => {
  it('tests the tooltip display by setting state and by clicking', () => {
    const component = shallow(
      <LineItemWithTooltip title={'test'} tooltipContent={'hello'} price={5} />
    );

    component.setState({ tooltipVisible: true });
    expect(component.find('Tooltip').length).toBe(1);

    component.setState({ tooltipVisible: false });
    expect(component.find('Tooltip').length).toBe(0);

    component.find('#test_click').simulate('click');
    expect(component.find('Tooltip').length).toBe(1);

    component.find('#test_click').simulate('click');
    expect(component.find('Tooltip').length).toBe(0);
  });
});
