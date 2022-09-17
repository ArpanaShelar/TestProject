import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import * as constants from '../Store/Constants/Constants.js';
const ScreenThree = () => {
  const fields = useSelector(state => state.username);
  const [username, setUsername] = useState(fields.username);
  return (
    <View style={styles.titleBox}>
      <Text style={styles.titles}> Welcome {username}</Text>
    </View>
  );
};
const screenHeight = Dimensions.get('window').height;
export default ScreenThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND,
  },

  titles: {
    fontSize: 22,
    color: constants.COLOUR_BACKGROUND_LIGHT,
    fontWeight: 'bold',
  },
  titleBox: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOUR_BACKGROUND_BLACK,
  },
});
