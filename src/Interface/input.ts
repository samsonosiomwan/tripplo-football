import {ReactNode} from 'react';
import {KeyboardType, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type FormLoad = inputData | selectInputData;

export interface itemType {
  [keys: string]: string;
}

export interface topRightIndicator {
  label: string;
  color: string;
  error?: boolean;
}

export interface inputProps {
  placeholder?: string;
  value?: string;
  label?: string;
  format?: 'amount' | 'date' | 'atm' | 'number';
  style?: StyleProp<ViewStyle>;
  secure?: boolean;
  noDecimals?: boolean;
  noCheck?: boolean;
  multiline?: boolean;
  editable?: boolean;
  maxLength?: number;
  loading?: boolean;
  optional?: boolean;
  showStrength?: boolean;
  validationRules?: string;
  keyboardType?: KeyboardType;
  step?: number;
  text?: string;
  onChangeText?: (t: string) => void;
  onChange?: (t: string) => void;
  currencyStyle?: any;
  innerContainerStyle?: any;
  textStyle?: StyleProp<TextStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  returnKeyType?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  noLabel?: boolean;
  gap?: number;
  confirmation?: string;
  validLength?: number;
  solidInput?: boolean;
  rightElement?: ReactNode | string;
  leftElement?: ReactNode | string;
  hasErrors?: (error: boolean) => void;
  showStrictPasswordIndicator?: boolean;
  topRightIndicator?: topRightIndicator | null;
}

interface listInputProps extends inputProps {
  data?: Array<any>;
  map?: any;
}

export interface inputData {
  key?: string;
  step?: number;
  type:
    | 'input'
    | 'select'
    | 'custom'
    | 'date'
    | 'textarea'
    | 'switch'
    | 'inline';
  id: string;
  description?: string;
  func?: () => void;
  props?: inputProps;
  inputs?: Array<FormLoad>;
}

export interface ISwitchInput {
  key?: string;
  id: string;

  props?: {
    label?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
  };
}

export interface selectInputData {
  key?: string;
  step?: number;
  type: 'input' | 'select' | 'date' | 'phoneNumber' | 'switch' | 'inline';
  id: string;
  description?: string;
  func?: () => void;
  props: listInputProps;
  inputs?: Array<FormLoad>;
}

export interface DatePickerProps {
  placeholder?: string;
  optional?: boolean;
  label?: string;
  initialValue?: string;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  noCheck?: boolean;
  past?: boolean;
  noLimit?: boolean;
  future?: boolean;
  validationRules?: string | undefined;
  maxDate?: Date | string | number;
  minDate?: Date | string | number;
  onChange?: (date: string | undefined) => void;
  inputStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  solidInput?: boolean;
  hasErrors?: (error: boolean) => void;
}
