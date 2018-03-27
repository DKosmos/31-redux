'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      return {...state, [payload.id] : undefined};
    case 'EXP_CREATE':
      let {categoryID} = payload;
      let categoryExp = state[categoryID];
      return {...state, [categoryID] : [...categoryExp]};
    default:
      return state;
  }
}