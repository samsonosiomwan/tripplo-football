import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface IStandings {
    item: {price:string};
    navigation?: NavigationProp<ParamListBase>;
}