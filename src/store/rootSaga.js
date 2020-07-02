import { fork, all } from 'redux-saga/effects'
import { starwarsData } from './ducks/starship'
import { starwarsDataPages } from './ducks/starshipsPages'
import { allStarwarsData } from './ducks/allStarships'

export default function* rootSaga() {
    yield all([
        fork(starwarsData),
        fork(starwarsDataPages),
        fork(allStarwarsData)
    ])
}