import { SET_RUNTIME_VARIABLE, SET_TEST_VARIABLE } from '../constants';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case SET_RUNTIME_VARIABLE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SET_TEST_VARIABLE:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
}
