import React from 'react';
import { shallow } from 'enzyme';
import VideoDetails from '../../../pages/VideoDetails/VideoDetails.page';

describe('Home', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      selectedVideo: {
        id: {
          videoId: 1,
        },
        snippet: {
          title: 'Wizeline',
          description:
            'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
        },
      },
      listofVideos: [
        {
          etag: 'S1Ewc2IMjGC1VE5mH3AryZ43IPQ',
          snippet: {
            thumbnails: {
              high: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
              },
            },
            title: 'Wizeline',
            description:
              'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
          },
        },
      ],
      setSelectedVideo: jest.fn(),
    };
    component = shallow(<VideoDetails {...props} />);
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
