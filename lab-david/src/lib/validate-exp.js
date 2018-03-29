'use strict';

const validateExp = store => next => action => {
  const isExp = action.type && action.type.startsWith('EXP');
  if(isExp){
    try{
      const exp = action.payload;
      const notValid = !exp.id || !exp.categoryID || !exp.name || !exp.amt;
      if(notValid){
        throw new Error('VALIDATION ERROR: expense must include id, name, amt, and categoryId');
      } else {
        return next(action);
      }
    } catch(err){
      console.error(err);
    }
  } else {
    return next(action);
  }
}

export default validateExp;