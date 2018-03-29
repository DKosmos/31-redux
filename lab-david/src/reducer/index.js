'use strict';

import {combineReducers} from 'redux';
import expReducer from './expenses.js';
import catReducer from './category.js';

export default combineReducers({
  exp: expReducer,
  categories: catReducer
})