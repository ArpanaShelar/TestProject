import React from 'react';
import ScreenOne from './Screens/ScreenOne';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {show_username} from './Store/Actions/Name';
import {bindActionCreators} from 'redux';
import NavigationStack from './Screens/NavigationStack';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <NavigationStack />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
