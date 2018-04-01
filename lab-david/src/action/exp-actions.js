'use strict';

import uuid from 'uuid/v1';

export const expCreate = (expense) => ({
  type: 'EXP_CREATE',
  payload: {...expense, id: uuid(), timestamp: new Date()}
})

export const expUpdate = (expense) => ({
  type: 'EXP_UPDATE',
  payload: {...expense}
})

export const expDelete = (expense) => ({
  type: 'EXP_DELETE',
  payload: {...expense}
})