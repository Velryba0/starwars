import { combineReducers } from 'redux'
import reducerStarships from './ducks/starship'

export default combineReducers({
    starships: reducerStarships
})