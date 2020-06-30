import { fork, all } from 'redux-saga/effects'
import { starwarsData } from './ducks/starship'

export default function* rootSaga() {
    yield all([
        fork(starwarsData)
    ])
}