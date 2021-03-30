import { MOCK_DATA_LOCALSTORAGE } from './localstorage_data';
import { storage, isFavoriteVideo } from '../../utils/storage';
import { FAVORITE_VIDEOS } from '../../utils/constants';

describe('Storage functions', () => {
  it('Is not a favorite video', () => {
    storage.set(FAVORITE_VIDEOS, MOCK_DATA_LOCALSTORAGE);
    expect(isFavoriteVideo('')).toBe(false);
  });
  it('Is favorite video', () => {
    storage.set(FAVORITE_VIDEOS, MOCK_DATA_LOCALSTORAGE);
    expect(isFavoriteVideo('erqeM78PZDWIBe8qOGHGM2WdSE8')).toBe(true);
  });
});
