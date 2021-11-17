import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { randomReducer } from './reducer';

const store = createStore(randomReducer, devToolsEnhancer());

export default store;