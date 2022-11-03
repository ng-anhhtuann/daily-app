import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NAME_TEXT, PERSONAL, PRIVATE, SECRET} from '../utils/colors';
import DescriptionPlot from './DescriptionPlot';

const DescriptionContainer = () => {
  return (
    <View style={styles.container}>
      <DescriptionPlot text={'Personal'} colorDot={PERSONAL} />
      <DescriptionPlot text={'Private'} colorDot={PRIVATE} />
      <DescriptionPlot text={'Secret'} colorDot={SECRET} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
});
export default DescriptionContainer;
