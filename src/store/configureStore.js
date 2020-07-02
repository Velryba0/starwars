import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './rootSaga'

export const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware]
    const store = createStore(reducers, applyMiddleware(...middlewares))
    sagaMiddleware.run(rootSaga)
    return store
  }
