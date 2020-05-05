import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWears = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWears));

export const persistor = persistStore(store); 


export default { store, persistor };