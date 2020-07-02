import { combineReducers } from 'redux'
import reducerStarships from './ducks/starship'
import reducerStarshipsPages from './ducks/starshipsPages'

export default combineReducers({
    starships: reducerStarships,
    starshipPages: reducerStarshipsPages
})