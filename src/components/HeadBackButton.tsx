import React, {FunctionComponent} from 'react';

import {View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import VectorIcon from './VictorIcon';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../utils/Fonts';


const HeadBackButton: FunctionComponent<{
  onPress?: () => void;
  color?: string;
}> = ({onPress, color}) => {
  
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress && onPress();

        navigation.goBack();
      }}>
      <View style={{paddingHorizontal: Fonts.w(10)}}>
        <VectorIcon
          name="arrow_back"
          size={Fonts.w(24)}
          color={color ? color : '#1A051D'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeadBackButton;
