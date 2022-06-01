/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import VectorIcon from './VictorIcon';
import InputError from './InputError';
import Fonts from '../utils/Fonts';
import { inputProps } from '../Interface/input';
import Colors from '../utils/Colors';

export interface MyInputHandles {
  focusInput(): void;
  checkValidation(setDirty?: boolean): number;
}

// type Ref = RefObject<TextInput>
const Input: ForwardRefRenderFunction<MyInputHandles, inputProps> = (
  {
    placeholder,
    value,
    format,
    label,
    style = {},
    secure = false,
    noCheck,
    validationRules,
    multiline,
    loading,
    onChangeText,
    onChange,
    confirmation,
    noDecimals,
    editable,
    maxLength,
    keyboardType,
    textStyle,
    textContainerStyle,
    onSubmitEditing,
    returnKeyType,
    solidInput,
    rightElement,
    leftElement,
    onBlur,
    onFocus,
    hasErrors,
    showStrictPasswordIndicator = false,
    topRightIndicator,
  },
  ref,
) => {
  const inputRef = useRef<TextInput>(null);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [text, setText] = useState('');
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [secureTextVisible, setSecureTextVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (loaded) {
      handleValidationCheck();
    }
  }, [value, text, loaded, loading, confirmation, topRightIndicator]);

  useEffect(() => {
    validate(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef?.current?.focus();
      setIsFocused(true);
    },
    checkValidation: () => {
      let errorCount = validate();
      return errorCount;
    },
  }));

  const toggleSecureEntry = () => {
    setSecureTextVisible(prev => !prev);
  };



  function handleOnChangeText(text: string) {
    let t = text;
    setLoaded(true);
    if (onChangeText) {
      onChangeText(t);
    }
    if (onChange) {
      onChange(t);
    }
    setText(t);
  }

  function handleValidationCheck() {
    if (noCheck) {
      return;
    }
    setError(false);
    setErrorMessage('');
    // Validate
    validate();
  }

  function validate(showMessage = true): number {
    if (validationRules) {
      const rules = validationRules.split('|');
      const errors = rules.filter((type: string) =>
        validationSwitch(type, showMessage),
      );
      // show error
      if (errors && errors.length > 0) {
        setError(true);
        hasErrors && hasErrors(true);
      } else {
        hasErrors && hasErrors(false);
      }
      return errors.length;
    }

    const error = validationSwitch();

    if (error) {
      setError(true);
      return 1;
    }

    hasErrors && hasErrors(false);
    return 0;
  }

  function validationSwitch(type?: string, showMessage = true) {
    if (value && value.length > 0) {
      if (topRightIndicator && topRightIndicator.error) {
        setError(true);
        setErrorMessage('Required');
        return true;
      }
      if (type?.trim() === 'number') {
        const number = /^(\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$/;
        if (!number.test(value || '') && value != '') {
          setError(true);
          showMessage && setErrorMessage('Not a valid number');
          return true;
        }
      }

   

      if (type?.trim().includes('length')) {
        const v = type?.trim().split(':');

        if (value.length < parseInt(v[1])) {
          setError(true);
          showMessage && setErrorMessage(`At least ${v[1]} characters`);
          return true;
        }
      }

      if (type?.trim().includes('maxlength')) {
        const v = type?.trim().split(':');

        if (value.length > parseInt(v[1])) {
          setError(true);
          showMessage && setErrorMessage(`Just ${v[1]} char is allowed`);
          return true;
        }
      }

      if (type?.trim() === 'confirm') {
        if (value !== confirmation && value != '') {
          setError(true);
          showMessage && setErrorMessage('Does not match');
          return true;
        }
      }

      if (type?.trim() === 'email') {
        const mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!mail.test(value.trim())) {
          setError(true);
          showMessage && setErrorMessage('Not a valid email');
          return true;
        }
      }

      if (type?.trim() === 'phone') {
        const numberPhone = /^(\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$/;
        if (
          (!numberPhone.test(value) && value != '') ||
          (value.length < 11 && value.length > 15)
        ) {
          setError(true);
          showMessage && setErrorMessage('Not a valid phone number');
          return true;
        }
      }

      if (type?.trim() === 'password') {
        let no = 0;
        if (value.length <= 8) {
          setPasswordStrength(0);
          showMessage && setErrorMessage('Should be greater than 7');
          return true;
        }

        // If the password length is greater than 6 and contain any lowercase alphabet or any number or any special character
        if (
          value.length > 8 &&
          (value.match(/[a-z]/) ||
            value.match(/\d+/) ||
            value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))
        ) {
          setPasswordStrength(1);
        }

        // If the password length is greater than 6 and contain alphabet,number,special character respectively
        if (
          value.length > 8 &&
          ((value.match(/[a-z]/) && value.match(/\d+/)) ||
            (value.match(/\d+/) &&
              value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) ||
            (value.match(/[a-z]/) &&
              value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))
        ) {
          setPasswordStrength(2);
        }

        // If the password length is greater than 6 and must contain alphabets,numbers and special characters
        if (
          value.length > 8 &&
          value.match(/[a-z]/) &&
          value.match(/\d+/) &&
          value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)
        ) {
          setPasswordStrength(3);
        }

        // return true;
      }

      if (showStrictPasswordIndicator) {
        if (!value.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/)) {
          setError(true);
          setErrorMessage('');
          return true;
        }
      }
    }

    if (type?.trim() === 'required') {
      if (!value) {
        setError(true);
        showMessage && setErrorMessage('Required');
        return true;
      }
    }

    if (loading) {
      setError(true);
      showMessage && setErrorMessage('Loading');
      return true;
    }

    return false;
  }

  function focusInput() {
    inputRef?.current?.focus();
    onFocus && onFocus();
    setIsFocused(true);
  }

  function blurInput() {
    setIsFocused(false);
    validate();
    onBlur && onBlur();
  }

  function renderTopRightIndicator() {
    if (topRightIndicator && value) {
      return (
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginLeft: Fonts.w(8),
              fontFamily: Fonts.Gilroy_Regular,
              fontSize: Fonts.w(11),
              color: topRightIndicator.color,
            }}>
            {topRightIndicator?.label}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  function renderErrorIndicator() {
    return !!(error && errorMessage) && <InputError message={errorMessage} />;
  }

  function renderLeftElement() {
    if (typeof leftElement === 'string') {
      return (
        <TouchableOpacity
          onPress={toggleSecureEntry}
          style={{alignSelf: 'center'}}>
          <VectorIcon
            name={leftElement}
            size={Fonts.w(16)}
            color={Colors.text}
          />
        </TouchableOpacity>
      );
    } else {
      return leftElement;
    }
  }

  function renderRightElement() {
    if (loading) {
      return (
        <View style={{alignSelf: 'center'}}>
          <ActivityIndicator size="small" />
        </View>
      );
    }
    if (secure) {
      return (
        <TouchableOpacity
          onPress={toggleSecureEntry}
          style={{alignSelf: 'center'}}>
          {secureTextVisible ? (
            <VectorIcon name={'eye'} size={Fonts.w(19)} color={Colors.text} />
          ) : (
            <Image
              source={require('../assets/images/dark-eye.png')}
              style={{width: Fonts.w(19), aspectRatio: 1}}
            />
          )}
        </TouchableOpacity>
      );
    }
    if (typeof rightElement === 'string') {
      return (
        <TouchableOpacity
          onPress={toggleSecureEntry}
          style={{alignSelf: 'center'}}>
          <VectorIcon
            name={rightElement}
            size={Fonts.w(16)}
            color={Colors.text}
          />
        </TouchableOpacity>
      );
    } else {
      return rightElement;
    }
  }

  function renderInput() {
    let wrapperStyle: any = [
      styles.clearInputWrapper,
      isFocused ? styles.clearInputFocused : null,
      error ? styles.inputError : null,
      textContainerStyle,
    ];
    let inputStyle: any = [styles.clearInput, textStyle];
    if (solidInput) {
      wrapperStyle = [
        styles.solidInputWrapper,
        isFocused ? styles.solidInputFocused : null,
        error && errorMessage ? styles.inputError : null,
        textContainerStyle,
      ];
      inputStyle = [styles.solidInput, textStyle, {flex: 1}];
    }
    return (
      <View style={wrapperStyle}>
        {renderLeftElement()}
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray}
          editable={editable}
          autoCapitalize="none"
          style={inputStyle}
          blurOnSubmit={false}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          spellCheck={false}
          multiline={multiline}
          autoCorrect={false}
          maxLength={maxLength}
          returnKeyType={(returnKeyType as any) || 'default'}
          onSubmitEditing={() => {
            if (onSubmitEditing) onSubmitEditing();
          }}
          secureTextEntry={secure ? !secureTextVisible : false}
          value={value}
          onChangeText={handleOnChangeText}
          onFocus={focusInput}
          onBlur={blurInput}
        />
        {renderRightElement()}
      </View>
    );
  }

  function renderStrictPasswordIndicator(message: string, valid: boolean) {
    return (
      <View style={styles.strictPasswordWrapper}>
        <VectorIcon
          size={10}
          name={valid ? 'done' : 'check'}
          color={valid ? Colors.success : Colors.text}
        />
        <Text style={styles.strictPasswordText}>{message}</Text>
      </View>
    );
  }

  function renderStrictPasswordIndicators() {
    let hasMinLength = false;
    let hasCapitalAndLower = false;
    let hasNumber = false;
    if (value?.match(/(?=.*[A-Z])/) && value?.match(/(?=.*[a-z])/)) {
      hasCapitalAndLower = true;
    }
    if (value?.match(/(?=.*[0-9])/)) {
      hasNumber = true;
    }
    if (value && value.length >= 8) {
      hasMinLength = true;
    }
    return (
      <View style={{marginTop: Fonts.h(28)}}>
        {renderStrictPasswordIndicator('Minimium 8 Characters', hasMinLength)}
        {renderStrictPasswordIndicator(
          'One Uppercase and Lowercase Character',
          hasCapitalAndLower,
        )}
        {renderStrictPasswordIndicator('One number', hasNumber)}
      </View>
    );
  }

  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={focusInput}>
        <View>
          {!!label && (
            <View style={styles.inputTop}>
              <Text style={styles.label}>{label}</Text>
              {renderTopRightIndicator()}
            </View>
          )}
          {renderInput()}
          {renderErrorIndicator()}
          {showStrictPasswordIndicator && renderStrictPasswordIndicators()}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Fonts.h(4),
    alignItems: 'center',
  },
  inputTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Fonts.h(4),
  },
  label: {
    fontFamily: Fonts.Gilroy_Bold,
    fontSize: Fonts.w(14),
    fontWeight: '500',
    lineHeight: Fonts.h(17),
    color: Colors.black,
  },
  solidInputWrapper: {
    flexDirection: 'row',
    height: Fonts.h(45),
    width: '100%',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: Fonts.w(4),
    paddingVertical: 0,
    paddingHorizontal: Fonts.w(16),
    borderColor: Colors.borderColor,
  },
  solidInput: {
    fontFamily: Fonts.Gilroy_Regular,
    fontWeight: '500',
    fontSize: Fonts.w(14),
    lineHeight: Fonts.w(17),
    color: Colors.blackText,
    height: '100%',
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  solidInputFocused: {
    color: Colors.text,
    borderColor: Colors.inputFocus,
  },
  clearInputWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    width: '100%',
    height: Fonts.h(30),
    // paddingBottom: Fonts.h(4),
  },
  clearInput: {
    textAlignVertical: 'bottom',
    fontSize: Fonts.w(14),
    lineHeight: Fonts.w(14),
    fontWeight: '400',
    color: Colors.text,
    fontFamily: Fonts.Gilroy_Regular,
    height: '100%',
    flex: 1,
    paddingVertical: 0,
    paddingBottom: Fonts.h(4),
  },
  clearInputFocused: {
    borderBottomColor: Colors.text,
  },
  inputError: {
    borderColor: Colors.error,
  },
  // error: {
  //   marginTop: Fonts.h(4),
  //   fontFamily: Fonts.Gilroy_Bold,
  //   fontWeight: '500',
  //   color: Colors.error,
  //   fontSize: Fonts.w(12),
  // },
  strictPasswordWrapper: {
    flexDirection: 'row',
    marginVertical: Fonts.h(4),
  },
  strictPasswordText: {
    fontFamily: Fonts.Gilroy_Regular,
    fontSize: Fonts.w(10),
    lineHeight: Fonts.h(14),
    fontWeight: '400',
    color: Colors.text,
    marginHorizontal: Fonts.w(8),
  },
});
export default forwardRef(Input);
