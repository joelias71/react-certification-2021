import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../components/Card';

describe('Card', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      title: 'Wizeline',
      image: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
      video: {},
      setSelectedVideo: jest.fn(),
      setSeeVideoDetail: jest.fn(),
      description:
        'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
    };
    component = shallow(<Card {...props} />);
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
  it('Card onClick()', () => {
    component.simulate('click');

    expect(props.setSeeVideoDetail).toHaveBeenCalled();
    expect(props.setSelectedVideo).toHaveBeenCalled();
  });
});