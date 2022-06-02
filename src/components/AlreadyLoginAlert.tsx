import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {BackHandler, Image, Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

import AlertCard from './AlertCard';
import TouchableButton from './TouchableButton';

export type IAlreadyLoginAlert = {
  open: () => void;
};

type props = {
  onContinue: () => void;
};

const AlreadyLoginAlert: ForwardRefRenderFunction<IAlreadyLoginAlert, props> = (
  {onContinue},
  ref,
) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handle = BackHandler.addEventListener(
      'hardwareBackPress',
      () => isVisible,
    );
    return () => {
      handle.remove();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsVisible(true);
    },
  }));

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      statusBarTranslucent
      transparent
      onRequestClose={() => false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
          paddingHorizontal: Fonts.w(20),
        }}>
        <AlertCard showCancelButton={false}>
          <View>
            <View style={{alignSelf: 'center', marginBottom: Fonts.h(30.99)}}>
              <Image source={require('../assets/images/bell.png')} />
            </View>
          </View>
          <Text style={styles.addWatchListHeader}>Already Logged In!</Text>
          <Text style={styles.addWatchListText}>
            Logging in now will log out other devices connected to this account.
            Do you want to continue?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableButton
              title="continue"
              textStyle={styles.buttonText}
              style={styles.button}
              onPress={() => {
                onContinue();
                setIsVisible(false);
              }}
            />
            <TouchableButton
              title="cancel"
              textStyle={styles.buttonText}
              reverse
              onPress={() => setIsVisible(false)}
              style={[styles.button, {marginLeft: Fonts.w(10)}]}
            />
          </View>
        </AlertCard>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addWatchListHeader: {
    textAlign: 'center',
    marginBottom: Fonts.h(10),
    fontSize: Fonts.w(16),
    lineHeight: Fonts.h(20),
    fontFamily: Fonts.Gilroy_Bold,
    fontWeight: '700',
  },
  addWatchListText: {
    textAlign: 'center',
    fontSize: Fonts.w(10),
    lineHeight: Fonts.h(15),
    fontFamily: Fonts.Gilroy_Regular,
    fontWeight: '400',
    color: Colors.text,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Fonts.h(20),
  },
  buttonText: {
    fontSize: Fonts.w(12),
  },
  button: {
    paddingHorizontal: Fonts.w(8),
    paddingVertical: Fonts.h(8),
    height: Fonts.h(30),
  },
});
export default forwardRef(AlreadyLoginAlert);
