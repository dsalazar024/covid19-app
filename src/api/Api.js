import axios from "axios";

const currentUrl = 'https://api.covidtracking.com/v1/us/current.json';
const historicalUrl = 'https://api.covidtracking.com/v1/us/daily.json';
const currentStatesUrl = 'https://api.covidtracking.com/v1/states/current.json';

export const currentData = async () => {
    try {
        const { data } = await axios.get(currentUrl);

        return data;
    } catch (error) {

    }
}

export const currentDataState = async () => {
    try {
        const { data } = await axios.get(currentStatesUrl);

        return data;
    } catch (error) {

    }
}

export const historicalDatas = async () => {
    try {
        const { data } = await axios.get(historicalUrl);

        return data;
    } catch (error) {

    }
}