import { actionTypes } from './actions';
import { HYDRATE } from 'next-redux-wrapper';

export interface LoginStateProps {
  loading: boolean;
  error: unknown;
  login: any;
}

const initialState: LoginStateProps = {
  loading: false,
  error: false,
  login: null,
};

function reducer(state, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{ login: action.data },
        loading: false,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        ...{ error: action.error },
        loading: false,
      };
    case actionTypes.CLEAR_STATE:
      return { ...initialState };

    default:
      return state;
  }
}

export default reducer;
