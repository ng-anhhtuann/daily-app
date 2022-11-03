import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {imgs} from '../assets';
import {GREY_TEXT, PURPLE_HEAVY, WHITE} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import CompilationItem from './CompilationItem';
import {CancelIcon, PendingIcon} from './svgs';

const Compilation = ({
  onCompletePressed,
  onCancelPressed,
  onPendingPressed,
  onGoingPressed,
  numberOfCompletedTasks,
  numberOfCanceledTasks,
  numberOfPendingTasks,
  numberOfOnTasks,
}) => {
  const testReducer = useSelector(state => state.testReducer);
  const complete = testReducer.complete;
  const cancel = testReducer.cancel;
  const pending = testReducer.pending;
  const on = testReducer.on;
  return (
    <View style={styles.compilationWrap}>
      <View style={styles.sideCompilation}>
        <CompilationItem
          buttonStyle={[styles.squareImg, styles.marginBottomStyle]}
          onPress={onCompletePressed}
          background={imgs.complete}
          textStyle={styles.textCompilationBlack}
          title={'Complete'}
          hasImg
          number={complete}
          backgroundStyle={styles.imageBackground}
          iconHolderStyle={styles.rowDirection}
          forwardColor={PURPLE_HEAVY}
          textHolder={styles.textHolder}
          imageSrc={
            <Image
              source={imgs.imac}
              style={styles.iconInside}
              resizeMode="contain"
            />
          }
        />
        <CompilationItem
          buttonStyle={styles.rectangleImg}
          onPress={onCancelPressed}
          background={imgs.cancel}
          forwardColor={WHITE}
          hasImg={false}
          textStyle={styles.textCompilationWhite}
          title={'Cancel'}
          number={cancel}
          backgroundStyle={styles.imageBackground}
          iconHolderStyle={styles.rowDirection}
          textHolder={styles.textHolder}
          imageSrc={<CancelIcon />}
        />
      </View>
      <View style={styles.sideCompilation}>
        <CompilationItem
          buttonStyle={[styles.rectangleImg, styles.marginBottomStyle]}
          onPress={onPendingPressed}
          background={imgs.pending}
          forwardColor={WHITE}
          textStyle={styles.textCompilationWhite}
          title={'Pending'}
          number={pending}
          backgroundStyle={styles.imageBackground}
          hasImg={false}
          iconHolderStyle={styles.rowDirection}
          textHolder={styles.textHolder}
          imageSrc={<PendingIcon />}
        />
        <CompilationItem
          buttonStyle={styles.squareImg}
          onPress={onGoingPressed}
          background={imgs.ongoing}
          textStyle={styles.textCompilationBlack}
          title={'On'}
          hasImg
          number={on}
          backgroundStyle={styles.imageBackground}
          iconHolderStyle={styles.rowDirection}
          forwardColor={PURPLE_HEAVY}
          textHolder={styles.textHolder}
          imageSrc={
            <Image
              source={imgs.note}
              style={styles.iconInside}
              resizeMode="contain"
            />
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textHolder: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconInside: {
    height: DeviceWidth * 0.175,
    width: DeviceWidth * 0.175,
  },
  rowDirection: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  imageBackground: {
    flex: 1,
    padding: 15,
  },
  emptyStyle: {},
  textCompilationBlack: {
    height: '50%',
    color: PURPLE_HEAVY,
    fontSize: DeviceHeight * 0.02,
  },
  textCompilationWhite: {
    color: WHITE,
    height: '50%',
    fontSize: DeviceHeight * 0.02,
  },
  imac: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  squareImg: {
    width: '100%',
    height: DeviceWidth * 0.42,
    borderRadius: 10,
  },
  marginBottomStyle: {
    marginBottom: DeviceHeight * 0.015,
  },
  rectangleImg: {
    width: '100%',
    height: DeviceWidth * 0.325,
  },
  marginVertical: {
    marginBottom: DeviceHeight * 0.015,
  },
  sideCompilation: {
    width: '48%',
  },
  compilationWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DeviceHeight * 0.015,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingLeft: DeviceWidth * 0.05,
    paddingRight: DeviceWidth * 0.05,
  },
  greeting: {
    fontSize: DeviceHeight * 0.035,
    color: PURPLE_HEAVY,
  },
  slogan: {
    fontSize: DeviceHeight * 0.0175,
    color: GREY_TEXT,
    marginTop: DeviceHeight * 0.01,
  },
  avatar: {
    flex: 2,
    height: DeviceHeight * 0.075,
  },
  sloganContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  compilation: {
    marginTop: DeviceHeight * 0.04,
    flex: 1,
  },
});
export default Compilation;
