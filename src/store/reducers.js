import { combineReducers } from 'redux'
import reducerStarships from './ducks/starship'
import reducerStarshipsPages from './ducks/starshipsPages'
import reducerAllStarships from './ducks/allStarships'
import reducerSearchStarships from './ducks/searchStarships'

export default combineReducers({
    starships: reducerStarships,
    starshipPages: reducerStarshipsPages,
    allStarships: reducerAllStarships,
    searchStarShipsData: reducerSearchStarships
})