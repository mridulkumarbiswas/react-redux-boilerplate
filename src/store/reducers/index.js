// src/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counter';

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here if you have more
});

export default rootReducer;