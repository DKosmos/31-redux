'use strict';

import uuid from 'uuid/v1';

export const categoryCreate = (category) => {
  category.id = uuid();
  category.timestamp = new Date();
  category.editing = false;
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = (category) => {
  category.editing = false;
  return {
    type: 'CATEGORY_UPDATE',
    payload: category
  }
}

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category
})

export const categoryReset = () => ({
  type: 'CATEGORY_RESET'
})