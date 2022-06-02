import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface IStandings {
    item: {team:{displayName:string}}
    navigation?: NavigationProp<ParamListBase>;
}

export interface IStandingsData {
    name: string;
    season:string
    standings: any
}
export interface IStandingsResponse {
    data: IStandingsData;
}