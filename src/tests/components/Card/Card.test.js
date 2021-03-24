import React from 'react';
import { mount } from 'enzyme';
import Card from '../../../components/Card';
import GlobalProvider from '../../../providers/Global';

describe('Card', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      title: 'Wizeline',
      image: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
      video: {
        id: {
          videoId: 1,
        },
        snippet: {
          title: 'Wizeline',
          description:
            'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
        },
      },
      description:
        'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
    };
    component = mount(
      <GlobalProvider>
        <Card {...props} />
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component.find(Card)).toHaveLength(1);
  });
  /* it('Card onClick()', () => {
    component.simulate('click');

    expect(props.setSeeVideoDetail).toHaveBeenCalled();
    expect(props.setSelectedVideo).toHaveBeenCalled();
  }); */
});
