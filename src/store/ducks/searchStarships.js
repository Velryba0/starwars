export const REQUEST_SEARCH_STARSHIPS = "REQUEST_SEARCH_STARSHIPS";
export const RECEIVE_SEARCH_STARSHIPS = "RECEIVE_SEARCH_STARSHIPS";

export const requestSearchStarships = (data) => ({ type: REQUEST_SEARCH_STARSHIPS, data});
export const receiveSearchStarships = (data) => ({ type: RECEIVE_SEARCH_STARSHIPS, data});

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_SEARCH_STARSHIPS:
            return data;
        default:
            return state;
    }
}