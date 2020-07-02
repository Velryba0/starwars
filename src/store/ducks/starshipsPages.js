import { all, call, put, takeEvery } from 'redux-saga/effects'
import { starshipDataPages } from '../../utils/API'

/**********SAGAS***********/

function* getStarshipsDataPages(args) {
    try {
       const dataStarshipPages = yield call(starshipDataPages, args);
       yield put(receiveStarshipDataPages(dataStarshipPages));
    } catch (e) {
       console.log(e)
    }
 }

export function* starwarsDataPages() {
    yield all([
        takeEvery(REQUEST_STARSHIPS_DATA_PAGES, getStarshipsDataPages)
    ])
}

/**********ACTION & ACTION CREATOR***********/

export const REQUEST_STARSHIPS_DATA_PAGES = "REQUEST_STARSHIPS_DATA_PAGES"
export const RECEIVE_STARSHIPS_DATA_PAGES = "RECEIVE_STARSHIPS_DATA_PAGES"

export const requestStarshipDataPages = (pag) => ({type: REQUEST_STARSHIPS_DATA_PAGES, pag})
export const receiveStarshipDataPages = (data) => ({type: RECEIVE_STARSHIPS_DATA_PAGES, data})


/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_STARSHIPS_DATA_PAGES:
            return data;
        default:
            return state;
    }
}