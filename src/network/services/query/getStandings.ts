import axios from "axios";
import { RequestResponse } from "../../../Interface/input";
import { BASE_URL } from "../../../navigation/apiEndpoints";



const getStandingsService =  async() => {
    const {data}:RequestResponse = await axios.get(BASE_URL);
    return data;
};

export default getStandingsService;