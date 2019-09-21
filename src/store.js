import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configureStore(initalState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initalState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
}
