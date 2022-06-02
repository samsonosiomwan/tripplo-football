
import React, {FC,  useEffect,  useLayoutEffect,  useRef, useState} from 'react';
import {Alert, Image, StyleSheet,  View, } from 'react-native';
import ScrollableContainer from '../../components/ScrollableContainer';
import TouchableButton from '../../components/TouchableButton';
import Input from '../../components/Input';
import AlreadyLoginAlert, {
  IAlreadyLoginAlert,
} from '../../components/AlreadyLoginAlert';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {HOME, TEAM_DETAILS} from '../../navigation/routeNames';
import { useRecoilState} from 'recoil';
import { userAtom } from '../../store/atoms/userAtom';
import { user } from '../../mock/user';
import {  getAuthData, storeAuthData, } from '../../store/storage';

const Login: FC<any> = ({navigation}) => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('nil');
  const loginCredentials = useRef({username: '', password: ''});
  const loginAlert = useRef<IAlreadyLoginAlert>(null);


  const [userState, setUserState] = useRecoilState(userAtom)



  const onPasswordChange = (value: string) => {
    setPassword(value);
  };

  const onUsernameChange = (value: string) => {
    setUsername(value.trim());
  };

 useEffect(
   ()=>{
 getAuthData().then(
     data=>{
       if(data){
        setUserState({...userState, isLoggedIn:true})
     }
    }

 )
  
   },[]
 )


  const handleLogin = () => {
  
    if (username ===  user.username && password === user.password) {
      setUserState({...userState, isLoggedIn:true})
      storeAuthData(username)
      navigation.navigate(HOME);
    } else {
      let showModal = false;

      let message = "Password or email doesn't match";
     
      if (!showModal) {
        Alert.alert('Authentication failed', message, [{text: 'ok'}]);
      } else {
        loginCredentials.current = {
          username: username,
          password: password,
        };
        loginAlert.current?.open();
      }
    }
   
  };

  return (
    <ScrollableContainer
      style={styles.container}
      containerStyle={styles.childContainer}>
     

      <View style={styles.body}>
        {
          <View style={styles.logoWrapper}>
            <View style={styles.profilePictureWrapper}>
              <Image
                style={styles.profilePicture}
                source={require('../../assets/images/logo.png')}
              />
            </View>
       
          </View>
        }
        <View style={styles.formContainer}>
          {
            <Input
              validationRules="required"
              placeholder="Enter Username"
              onChange={onUsernameChange}
              value={username}
              solidInput={true}
              label="Username"
              style={styles.input}
            />
          }
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
      
            textStyle={{fontSize: Fonts.w(12)}}
            onPress={handleLogin}
        
            disabled={isPasswordValid}
          />
        
        
        </View>
      </View>
      <AlreadyLoginAlert
        ref={loginAlert}
        onContinue={
          () => console.log('here==>')
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
  logoWrapper: {
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
});
export default Login;
