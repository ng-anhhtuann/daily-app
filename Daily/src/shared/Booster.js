import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BOOST_BG, PRIVATE, TEXT} from '../utils/colors';
import {title} from '../utils/typo';

const Booster = ({day, percent, type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boosterHolder}>
        <View
          style={[
            styles.childBooster,
            {height: `${percent}%`, backgroundColor: type},
          ]}
        />
      </View>
      <View style={styles.privateHolder} />
      <Text style={styles.text}>{day}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boosterHolder: {
    height: '45%',
    width: '30%',
    backgroundColor: BOOST_BG,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  privateHolder: {
    height: '45%',
    width: '30%',
    backgroundColor: PRIVATE,
    borderRadius: 20,
  },
  text: {fontSize: title.small, color: TEXT},
  childBooster: {width: '100%', borderRadius: 20},
});
export default Booster;
