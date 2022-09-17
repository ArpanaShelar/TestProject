import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const appStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <NavigationContainer>
      <appStack.Navigator
        initialRouteName="ScreenOne"
        screenOptions={({navigation}) => ({
          headerBackTitle: '',
        })}>
        <appStack.Screen name="ScreenOne" component={ScreenOne} />

        <appStack.Screen name="ScreenTwo" component={ScreenTwo} />
        <appStack.Screen name="ScreenThree" component={ScreenThree} />
        {/* <appStack.Screen
          name="screen one"
          component={ScreenOne}
          options={({navigation}) => ({
            headerTitle: '',
          })}
        /> */}
      </appStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackScreen;
