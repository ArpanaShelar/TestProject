import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ScreenThree from '../Screens/ScreenThree';
describe('ScreenOne component', () => {
  it('check if Screen Three renders corerctly', () => {
    renderer.create(<ScreenThree />);
  });
});
