import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { GlobalStyles } from '../../components/globalStyles';
import { lightTheme, darkTheme } from '../../components/Themes';

describe('GlobalStyle', () => {
  it('renders properly', () => {
    const tree = renderer.create(GlobalStyles.globalStyle).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with a LIGHT theme', () => {
    renderer.create(<GlobalStyles theme={lightTheme} />);
    expect(document.head).toMatchSnapshot();
  });
  it('renders with a DARK theme', () => {
    renderer.create(<GlobalStyles theme={darkTheme} />);
    expect(document.head).toMatchSnapshot();
  });
});
