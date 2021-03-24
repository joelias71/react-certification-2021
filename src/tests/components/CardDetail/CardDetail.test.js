import React from 'react';
import { mount } from 'enzyme';
import CardDetail from '../../../components/CardDetail';
import GlobalProvider from '../../../providers/Global';

describe('Card', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      title: 'Wizeline',
      image: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
      video: {},
      description:
        'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
    };

    component = mount(
      <GlobalProvider>
        <CardDetail {...props} />
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component.find(CardDetail)).toHaveLength(1);
  });
  /* it('CardDetail onClick()', () => {
    component.simulate('click');

    expect(props.dispatch).toHaveBeenCalled();
  }); */
});
