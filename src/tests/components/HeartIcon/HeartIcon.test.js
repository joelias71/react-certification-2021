import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UPDATE_FAVORITE_VIDEOS } from '../../../actions/actions';
import HeartIcon from '../../../components/HeartIcon';
import GlobalProvider from '../../../providers/Global';
import AuthProvider from '../../../providers/Auth';
import { MOCK_DATA_LOCALSTORAGE } from '../../utils/localstorage_data';
import { FAVORITE_VIDEOS } from '../../../utils/constants';
import { storage } from '../../../utils/storage';

describe('HeartIcon', () => {
  beforeEach(() => {
    storage.set(FAVORITE_VIDEOS, MOCK_DATA_LOCALSTORAGE);
  });
  it('Change to true', () => {
    const props = {
      isFavorite: false,
      type: UPDATE_FAVORITE_VIDEOS,
    };

    const { container } = render(
      <GlobalProvider>
        <AuthProvider>
          <HeartIcon {...props} />
        </AuthProvider>
      </GlobalProvider>
    );

    fireEvent.click(container.querySelector('svg'));

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('Change to false', () => {
    const props = {
      isFavorite: true,
      type: UPDATE_FAVORITE_VIDEOS,
    };

    const { container } = render(
      <GlobalProvider>
        <AuthProvider>
          <HeartIcon {...props} />
        </AuthProvider>
      </GlobalProvider>
    );

    fireEvent.click(container.querySelector('svg'));

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
