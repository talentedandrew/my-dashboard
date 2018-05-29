/* eslint-disable import/prefer-default-export */

import { SET_RUNTIME_VARIABLE, SET_TEST_VARIABLE } from '../constants';

export function setRuntimeVariable({ name, value }) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}

export function testActionCreator(data) {
  return {
    type: SET_TEST_VARIABLE,
    payload: {
      ...data,
    },
  };
}

export function test() {
  return async (dispatch, getState, { fetch }) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const data = await fetch(url);
    dispatch(testActionCreator(data));
  };
}
