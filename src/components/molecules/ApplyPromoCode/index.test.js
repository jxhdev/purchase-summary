import React from 'react';
import ApplyPromoCode from './index';
import { shallow } from 'enzyme';

describe('testing ApplyPromoCode', () => {
  const wrapper = shallow(<ApplyPromoCode applyDiscount={() => {}} />);

  it('changes value on change', () => {
    wrapper.find('input').simulate('change', { target: { value: 'hello' } });
    expect(wrapper.find('input').props().value).toEqual('hello');
  });

  it('clears the form on submit', () => {
    const fakeEvent = { preventDefault() {} };
    wrapper.find('form').simulate('submit', fakeEvent);
    expect(wrapper.find('input').props().value).toEqual('');
  });
});
