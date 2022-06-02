import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/icons/selection.json';
import {StyleProp, TextStyle} from 'react-native';
import Colors from '../utils/Colors';


const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const VectorIcon: FC<{
  size: number;
  name: string;
  focused?: boolean;
  color?: string;
  style?: StyleProp<TextStyle>;
}> = ({size, name, focused, color, style}) => {
  return (
    <>
      <Icon
        name={name}
        size={size}
        color={focused ? Colors.primaryColor : color ? color : Colors.gray}
        style={style}
      />
    </>
  );
};

export default VectorIcon;
