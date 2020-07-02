import { all, call, put, takeEvery } from 'redux-saga/effects'
import { allStarships1, allStarships2, allStarships3, allStarships4 } from '../../utils/API'

/**********SAGAS***********/

function* getAllStarships() {
    try {
        const [data1, data2, data3, data4] = yield all([
            call(allStarships1),
            call(allStarships2),
            call(allStarships3),
            call(allStarships4)
        ])
        yield put(receiveAllStarships([data1, data2, data3, data4]))
    } catch (error) {
        console.log("No se ha podido obtener la información", error);
    }
}


export function* allStarwarsData() {
    yield all([
        takeEvery(REQUEST_ALL_STARSHIPS, getAllStarships),
    ])
}

/**********ACTION & ACTION CREATOR***********/

export const REQUEST_ALL_STARSHIPS = "REQUEST_ALL_STARSHIPS";
export const RECEIVE_ALL_STARSHIPS = "RECEIVE_ALL_STARSHIPS";

export const requestAllStarships = () => ({ type: REQUEST_ALL_STARSHIPS });
export const receiveAllStarships = (data) => ({ type: RECEIVE_ALL_STARSHIPS, data})

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_ALL_STARSHIPS:
            return data;
        default:
            return state;
    }
}