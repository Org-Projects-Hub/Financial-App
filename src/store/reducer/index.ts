import { combineReducers } from 'redux';
import { action } from '../../models';
import {
  stateType as backStateType,
  backButtonReducer,
} from './backButtonReducer';

export interface RootState {
  back: backStateType;
  class: any;
}

const intialState = {
  user: {},
};

export function rootReducer(state = intialState, action: action): any {
  switch (action.type) {
    case 'JOIN_CLASS':
      console.log(action.code);
      return {
        ...intialState,
        class: [action.code],
      };
    default:
      return state;
  }
}

export default combineReducers({
  back: backButtonReducer,
  class: rootReducer,
});
