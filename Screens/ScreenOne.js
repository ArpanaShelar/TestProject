import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ACTION_TYPE} from '../Store/Constants/Constants';
import * as constants from '../Store/Constants/Constants.js';
const screenHeight = Dimensions.get('window').height;

const ScreenOne = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  const dispatchUsername = () => {
    dispatch({type: ACTION_TYPE.SHOW_USERNAME, payload: username});
    navigation.navigate('ScreenTwo');
  };

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <View style={{height: '100%', width: '100%', padding: 10}}>
        <Text style={[styles.titles, {marginTop: 16}]}>First name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <View
          style={{
            top: -8,
            height: 1,
            backgroundColor: constants.COLOUR_BACKGROUND_HIGHLIGHT,
          }}
        />

        <Text style={[styles.titles, {marginTop: 24}]}>Last name</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={text => setLastName(text)}
          value={lastName}
        />
        <View
          style={{
            top: -8,
            height: 1,
            backgroundColor: constants.COLOUR_BACKGROUND_HIGHLIGHT,
          }}
        />

        <TouchableOpacity
          style={[
            styles.butonItem,
            {marginTop: 32, height: screenHeight * 0.06},
          ]}
          disabled={username == ''}
          onPress={() => dispatchUsername()}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={[
                username == ''
                  ? [styles.titlesDisabled]
                  : [styles.buttonText, {color: constants.COLOUR_HIGHLIGHT}],
              ]}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
        {username == '' && (
          <Text style={styles.erroMsg}>Please enter valid username</Text>
        )}
      </View>
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND,
  },

  titles: {
    fontSize: 18,
    color: constants.COLOUR_TEXT,
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
  },

  butonItem: {
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND,
    borderColor: constants.COLOUR_HIGHLIGHT,
    borderWidth: 1,
  },
  erroMsg: {
    marginTop: 16,
    fontSize: 14,
    color: constants.COLOUR_HIGHLIGHT,
    textAlign: 'justify',
  },
});
