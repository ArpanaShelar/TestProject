import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Modal,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ACTION_TYPE} from '../Store/Constants/Constants';
import * as constants from '../Store/Constants/Constants.js';
import DeviceInfo from 'react-native-device-info';
import {AsyncStorage} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const HAS_LAUNCHED = 'hasLaunched';

function setAppLaunched() {
  AsyncStorage.setItem(HAS_LAUNCHED, 'true');
}

const ScreenOne = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEmulator, setIsEmulator] = useState(false);
  const [hideModal, setHideModal] = useState(true);

  const dispatch = useDispatch();
  const hideThisModal = () => {
    setIsEmulator(false);
  };
  const checkIfFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem('@firstLaunch');
      if (value === null) {
        await AsyncStorage.setItem('@firstLaunch', 'true');
        DeviceInfo.isEmulator().then(isEmulator => {
          setIsEmulator(isEmulator);
          // alert(JSON.stringify(isEmulator));
        });
      }
    } catch (error) {
      console.log('checking first launch error' + error);
    }
  };
  const isFirstLaunch = checkIfFirstLaunch();
  const dispatchUsername = () => {
    dispatch({type: ACTION_TYPE.SHOW_USERNAME, payload: username});
    navigation.navigate('ScreenTwo');
  };

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <Modal visible={isEmulator} animationType={'fade'}>
        <View
          style={{
            flex: 1,
            height: screenHeight * 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View style={styles.submit_dialog_Main}>
            <Text style={styles.alertTitle}>App is running on emulator</Text>

            <View style={{width: '100%', height: 2, backgroundColor: '#fff'}} />

            <Text style={styles.alertMsg}>Do you want to continue</Text>

            <View style={{width: '100%', height: 1, backgroundColor: '#fff'}} />

            <View style={{flexDirection: 'row', height: '30%'}}>
              <TouchableOpacity
                style={[
                  styles.butonItem,
                  {width: '20%', height: '50%', left: '20%', borderRadius: 0},
                ]}
                onPress={() => hideThisModal()}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={
                      (styles.buttonText,
                      {fontSize: 15},
                      {color: constants.COLOUR_HIGHLIGHT})
                    }>
                    OK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  buttonText: {
    fontSize: 20,

    color: constants.COLOUR_TEXT,
  },
  alertTitle: {
    fontSize: 20,
    top: 20,
    color: 'black',
    textAlign: 'center',
    padding: 10,
    height: '28%',
    fontWeight: 'bold',
  },
  submit_dialog_Main: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: '30%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,
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
  alertMsg: {
    fontSize: 22,
    color: constants.COLOUR_TEXT,
    textAlign: 'center',
    padding: 10,
    height: '42%',
  },
  erroMsg: {
    marginTop: 16,
    fontSize: 14,
    color: constants.COLOUR_HIGHLIGHT,
    textAlign: 'justify',
  },
});
