import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ScreenTwo from '../Screens/ScreenTwo';
describe('ScreenOne component', () => {
  it('check if Screen Two renders corerctly', () => {
    renderer.create(<ScreenTwo />);
  });
});
Avani;
