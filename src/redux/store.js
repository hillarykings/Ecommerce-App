import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWears = [];


if (process.env.NODE_ENV === 'development') {
    middleWears.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWears));

export const persistor = persistStore(store); 


export default { store, persistor };