import { action } from '../../models';
import actionTypes from '../action/actionTypes';

export interface stateType {
  display: boolean;
  backFunction: Function;
}

const initialState: stateType = {
  display: false,
  backFunction: null,
};

export const backButtonReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case actionTypes.ADD_BACK_FUNCTION:
      return { ...state, backFunction: action.payload };

    case actionTypes.HIDE_BACK_FUNCTION:
      return { ...state, ...initialState };

    case actionTypes.SHOW_BACK_FUNCTION:
      return { ...state, display: true };

    default:
      return state;
  }
};
