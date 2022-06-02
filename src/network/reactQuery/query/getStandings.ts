import {useState} from 'react';
import {useQuery} from 'react-query';
import { ErrorMessage } from '../../../constants';
import {IStandingsResponse} from '../../../Interface/props';
import { InitialStandingsState } from '../../../store/initialState/standings';
import {STANDINGS_KEY} from '../../config/queryKeys';
import getStandingsService from '../../services/query/getStandings';



const useStandings = () => {
  const [standings, setStandings] = useState({...InitialStandingsState});
  const [standingsError, setStandingsError] = useState('');

  const {isLoading: isLoadingStandings, isSuccess} = useQuery(
    STANDINGS_KEY,
    getStandingsService,

    {
      onSuccess: (data: IStandingsResponse) => {
        setStandings({ ...data.data });
      },
      onError: (error: Record<any, any>) => {
        setStandingsError(error?.response?.data?.message  || ErrorMessage);
      },
    },
  );

  return {
    standingsError,
    isLoadingStandings,
    standings,
    isSuccess,
  };
};

export default useStandings;
