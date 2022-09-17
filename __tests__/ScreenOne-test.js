import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ScreenOne from '../Screens/ScreenOne';
describe('ScreenOne component', () => {
  it('check if Screen One renders corerctly', () => {
    renderer.create(<ScreenOne />);
  });
});
