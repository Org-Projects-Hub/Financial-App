import actionTypes from './actionTypes';

export const changeBackFunction = (func: Function) => {
  return {
    type: actionTypes.ADD_BACK_FUNCTION,
    payload: func,
  };
};

export const showBackFunction = () => {
  return {
    type: actionTypes.SHOW_BACK_FUNCTION,
  };
};

export const hideBackFunction = () => {
  return {
    type: actionTypes.HIDE_BACK_FUNCTION,
  };
};
