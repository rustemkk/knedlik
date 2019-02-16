import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


export default function configureStore() {

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), autoRehydrate())
  );

  sagaMiddleware.run(rootSaga);

  persistStore(store, { whitelist: ['accounts'] });

  return store;
}
