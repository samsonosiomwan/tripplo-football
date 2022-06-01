import {Dimensions} from 'react-native';

const DEVICE_SCALE = Dimensions.get('window').width / 360;
const DEVICE_SCALE_HEIGHT = Dimensions.get('window').height / 688;

const Gilroy_Bold = 'Gilroy-Bold';
const Gilroy_Heavy = 'Gilroy-Heavy';
const Gilroy_Light = 'Gilroy-Light';
const Gilroy_Medium = 'Gilroy-Medium';
const Gilroy_Regular = 'Gilroy-Regular';
const Raleway_bold = 'Raleway_bold';
const Raleway = 'Raleway';

function normalize(size: number): number {
  return Math.round(DEVICE_SCALE * (size + 2));
}

export default {
  Gilroy_Bold,
  Gilroy_Heavy,
  Gilroy_Light,
  Gilroy_Medium,
  Gilroy_Regular,
  Raleway_bold,
  Raleway,
  h: (size: number): number => Math.round(DEVICE_SCALE_HEIGHT * size),
  w: normalize,
};
