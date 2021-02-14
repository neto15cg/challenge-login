export const actionTypes = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  CLEAR_STATE: 'CLEAR_STATE',
};

export function failure(error) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error,
  };
}

export function clearState() {
  return {
    type: actionTypes.CLEAR_STATE,
  };
}

export function loadData(data) {
  return { type: actionTypes.LOGIN_START, payload: data };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
}
