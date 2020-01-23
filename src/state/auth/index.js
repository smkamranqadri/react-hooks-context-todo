const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const login = () => ({
  type: LOGIN_SUCCESS
});

const logout = () => ({
  type: LOGOUT_SUCCESS
});

const initialState = {
  isLoggedIn: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default {
  actions: {
    login,
    logout
  },
  initialState,
  reducer
};
