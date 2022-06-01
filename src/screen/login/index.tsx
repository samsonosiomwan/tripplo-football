import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useEffect, useRef, useState} from 'react';
import {Alert, Image, StyleSheet, Text, View, Keyboard} from 'react-native';
import ScrollableContainer from '../../components/ScrollableContainer';
import TouchableButton from '../../components/TouchableButton';

import {TouchableOpacity} from 'react-native-gesture-handler';

import Input from '../../components/Input';

import AlreadyLoginAlert, {
  IAlreadyLoginAlert,
} from '../../components/AlreadyLoginAlert';
import LoginHeader from '../../components/LoginHeader';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';


const Login: FC<any> = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const loginCredentials = useRef({email: '', password: ''});
  const loginAlert = useRef<IAlreadyLoginAlert>(null);
  const onPasswordChange = (value: string) => {
    setPassword(value);
  };

  const onEmailChange = (value: string) => {
    setEmail(value.trim());
  };

  
   
     
      
      
       
      

  const forgotPassword = async () => {
    navigation.navigate('ForgotPassword');
  };

  const signOut = async () => {
    
    return;
  };

  



  return (
    <ScrollableContainer
      style={styles.container}
      containerStyle={styles.childContainer}>
      {/* {!profile && (
        <View style={styles.headerBody}>
          <LoginHeader smallText="Login" largeText="Sign into your account" />
          <Image source={require('../../assets/images/password.png')} />
        </View>
      )} */}
    
      <View style={styles.body}>
        {(
          <View style={styles.profileWrapper}>
            <View style={styles.profilePictureWrapper}>
              <Image
                style={styles.profilePicture}
                source={require('../../assets/images/logo.png')}
              />
            </View>
            {/* <Text style={styles.welcomeBackText}>Welcome Back</Text>
            <Text style={styles.accountName}>
              {profile.firstname} {profile.lastname}
            </Text> */}
          </View>
        )}
        <View style={styles.formContainer}>
          {(
            <Input
              validationRules="required|email"
              placeholder="Enter Email"
              onChange={onEmailChange}
              value={email}
              solidInput={true}
              label="Email"
              style={styles.input}
              hasErrors={v => setIsEmailValid(v)}
            />
          )}
          <Input
            validationRules="required"
            placeholder="Enter Password"
            onChange={onPasswordChange}
            value={password}
            secure={true}
            solidInput={true}
            label="Password"
            style={styles.input}
            hasErrors={v => setIsPasswordValid(v)}
          />
          <TouchableButton
            title="Log in"
            // style={styles.forgotPassword}
            textStyle={{fontSize: Fonts.w(12)}}
            // onPress={handleLogin}
            loading={isLoading}
            disabled={isEmailValid && isPasswordValid}
          />
          <TouchableButton
            title="Forgot Password?"
            transparent
            style={styles.forgotPassword}
            textStyle={{fontSize: Fonts.w(12)}}
            onPress={forgotPassword}
          />
          {/* {profile && biometryLogin && (
            <View style={styles.fingerPrintWrapper}>
              <TouchableOpacity onPress={handleLogin}>
                <Image
                  source={require('../../assets/images/fingerprint.png')}
                />
              </TouchableOpacity>
              <Text>Use Biometric</Text>
            </View>
          )} */}
          {/* {profile && (
            <TouchableButton
              title="Sign Out"
              transparent
              style={[styles.forgotPassword, {marginTop: Fonts.h(45)}]}
              textStyle={{fontSize: Fonts.w(12)}}
              onPress={signOut}
            />
          )} */}
        </View>
      </View>
      <AlreadyLoginAlert
        ref={loginAlert}
        onContinue={() =>
            console.log("here==>")
        //   onLogin(
        //     loginCredentials.current.email,
        //     loginCredentials.current.password,
        //     true,
        //   )
        }
      />
     </ScrollableContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Fonts.w(24),
    backgroundColor: Colors.white,
    flex: 1,
  },
  childContainer: {
    flexGrow: 1,
  },
  body: {
    justifyContent: 'center',
    flex: 1,
  },
  headerBody: {
    marginBottom: Fonts.h(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Fonts.h(32),
  },
  profilePictureWrapper: {
    width: Fonts.w(150),
    aspectRatio: 1,
    borderRadius: Fonts.w(100),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.white,
  },
  profilePicture: {
    width: Fonts.w(50),
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  welcomeBackText: {
    fontFamily: Fonts.Gilroy_Bold,
    fontWeight: '700',
    fontSize: Fonts.w(20),
    lineHeight: Fonts.h(25),
    color: Colors.grayAlt1,
    marginTop: Fonts.h(16),
    marginBottom: Fonts.h(4),
    textAlign: 'center',
  },
  accountName: {
    fontFamily: Fonts.Gilroy_Regular,
    fontSize: Fonts.w(14),
    lineHeight: Fonts.h(17),
    textAlign: 'center',
    color: Colors.black,
    textTransform: 'capitalize',
  },
  formContainer: {
    // flexGrow: 1,
    justifyContent: 'center',
  },
  form: {
    flexGrow: 0,
    justifyContent: 'center',
    paddingBottom: 0,
  },
  input: {
    marginBottom: Fonts.h(28),
  },
  button: {
    marginTop: Fonts.h(34),
  },
  forgotPassword: {
    alignSelf: 'center',
    height: undefined,
    paddingVertical: 0,
    marginTop: Fonts.h(7),
    lineHeight: Fonts.h(15),
  },
  fingerPrintWrapper: {
    alignSelf: 'center',
    marginTop: Fonts.h(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fingerPrintText: {
    fontFamily: Fonts.Raleway,
    fontWeight: '400',
    fontSize: Fonts.w(12),
    lineHeight: Fonts.h(18),
    textAlign: 'center',
    color: Colors.text,
    marginTop: Fonts.h(9),
  },
});
export default Login;