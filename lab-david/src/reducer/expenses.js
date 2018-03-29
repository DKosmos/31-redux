'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      delete state[payload.id];
      return {...state};
    case 'EXP_CREATE':
      let {categoryID} = payload;
      let categoryExp = [...state[categoryID], payload];
      return {...state, [categoryID] : [...categoryExp]};
    case 'EXP_UPDATE':
      let categoryUpdateExp = state[payload.categoryID].map(exp => exp.id === payload.id ? payload : exp);
      return {...state, [payload.categoryID]: [...categoryUpdateExp]};
    case 'EXP_DELETE':
      let categoryDeleteExp = state[payload.categoryID].filter(exp => exp.id !== payload.id);
      return {...state, [payload.categoryID]: [...categoryDeleteExp]};
    default:
      return state;
  }
}