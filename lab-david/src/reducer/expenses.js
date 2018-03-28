'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      console.log('state@exp', {...state});
      delete state[payload.id];
      return {...state};
    case 'EXP_CREATE':
      let {categoryID} = payload;
      let categoryExp = state[categoryID];
      return {...state, [categoryID] : [...categoryExp]};
    case 'EXP_UPDATE':
      return state.map();
    default:
      return state;
  }
}