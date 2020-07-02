import { all, call, put, takeEvery } from 'redux-saga/effects'
import { starshipData } from '../../utils/API'

/**********SAGAS***********/

function* getStarshipsData() {
    try {
        const resultStarshipData = yield call(starshipData);
        yield put(receiveStarshipData(resultStarshipData))
    } catch (error) {
        console.log("No se ha podido obtener la información", error);
    }
}

export function* starwarsData() {
    yield all([
        takeEvery(REQUEST_STARSHIPS_DATA, getStarshipsData)
    ])
}

/**********ACTION & ACTION CREATOR***********/

export const REQUEST_STARSHIPS_DATA = 'REQUEST_STARSHIPS_DATA';
export const RECEIVE_STARSHIPS_DATA = 'RECEIVE_STARSHIPS_DATA';

export const requestStarshipData = () => ({ type: REQUEST_STARSHIPS_DATA})
export const receiveStarshipData = (data) => ({ type: RECEIVE_STARSHIPS_DATA, data});

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_STARSHIPS_DATA:
            return data;
        default:
            return state;
    }
}