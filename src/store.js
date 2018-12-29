import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


export default function configureStore() {

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
