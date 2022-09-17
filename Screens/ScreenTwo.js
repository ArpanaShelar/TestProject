import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import * as constants from '../Store/Constants/Constants.js';
import Slider from 'react-native-slide-to-unlock';
import {useSelector} from 'react-redux';
const screenHeight = Dimensions.get('window').height;
const ScreenTwo = ({navigation}) => {
  const fields = useSelector(state => state.username);
  const [username, setUsername] = useState(fields.username);
  const clickedBtnOne = () => {
    alert(username + ' clicked button 1');
  };
  const clickedBtnTwo = () => {
    alert(username + ' clicked button 2');
  };
  const clickedBtnThree = () => {
    alert(username + ' clicked button 3');
  };
  const navigateToScreen3 = () => {
    navigation.navigate('ScreenThree');
  };
  return (
    <React.Fragment>
      <View style={styles.titleBox}>
        <Text style={styles.titles}> Welcome {username}</Text>
      </View>
      <View style={styles.viewbottom}>
        <TouchableOpacity
          style={[
            styles.butonOne,
            {
              marginTop: 32,
              height: screenHeight * 0.06,
              width: screenHeight * 0.4,
            },
          ]}
          disabled={username == ''}
          onPress={() => clickedBtnOne()}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={[styles.buttonText, {color: constants.COLOUR_BUTTONS}]}>
              BUTTON TYPE 1
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.butonTwo,
            {
              marginTop: 32,
              height: screenHeight * 0.06,
              width: screenHeight * 0.4,
            },
          ]}
          disabled={username == ''}
          onPress={() => clickedBtnTwo()}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={[styles.buttonText, {color: constants.COLOUR_BUTTONS}]}>
              BUTTON TYPE 2
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.butonThree,
            {
              marginTop: 32,
              height: screenHeight * 0.06,
              width: screenHeight * 0.4,
            },
          ]}
          disabled={username == ''}
          onPress={() => clickedBtnThree()}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={[styles.buttonText, {color: constants.COLOUR_TEXT_LIGHT}]}>
              BUTTON TYPE 3
            </Text>
          </View>
        </TouchableOpacity>
        <Slider
          onEndReached={() => {
            navigateToScreen3();
          }}
          containerStyle={{
            height: 75,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: constants.COLOUR_BACKGROUND_BLACK,

            borderWidth: 1,
            marginTop: 32,

            borderRadius: 10,
            overflow: 'hidden',
            width: screenHeight * 0.4,
          }}
          sliderElement={
            <Image
              style={{
                width: 50,
                margin: 4,
                borderRadius: 5,
                height: 50,
                backgroundColor: constants.COLOUR_BUTTONS,
              }}
              source={require('../Images/diamond.png')}
            />
          }>
          <Text
            style={{
              color: constants.COLOUR_BUTTONS,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            {'SLIDE TO NAVIGATE'}
          </Text>
        </Slider>
      </View>
    </React.Fragment>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND_BLACK,
  },
  titleBox: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND_BLACK,
  },

  viewbottom: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,

    backgroundColor: constants.COLOUR_BACKGROUND_BLACK,
  },

  titles: {
    fontSize: 25,
    color: constants.COLOUR_TEXT_LIGHT,
    fontWeight: 'bold',
  },

  textInput: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: screenHeight * 0.06,
  },
  titlesDisabled: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: constants.COLOUR_DISABLED,
  },
  buttonText: {
    fontSize: 18,
    color: constants.COLOUR_TEXT,
    fontWeight: 'bold',
  },

  butonFour: {
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND,
    borderColor: constants.COLOUR_HIGHLIGHT,
    borderWidth: 1,
  },
  butonOne: {
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND_BLACK,

    borderWidth: 1,
  },
  butonTwo: {
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BUTTONS_BACK,

    borderWidth: 1,
  },
  butonThree: {
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BUTTONS,

    borderWidth: 1,
  },
  erroMsg: {
    marginTop: 16,
    fontSize: 14,
    color: constants.COLOUR_HIGHLIGHT,
    textAlign: 'justify',
  },
});
