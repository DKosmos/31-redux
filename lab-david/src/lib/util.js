'use strict';

export const renderIf = (test, component) => text ? component : undefined;
export const classToggler = (options) =>
  Object.keys(options).filter(key => options[key]).join(' ');