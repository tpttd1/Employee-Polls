import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  STORAGE_USERS,
} from "../../constants";

const INIT_STATE = {
  user: null,
  users: [],
  loading: false,
};

export default function userReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.user };
    case STORAGE_USERS:
      return { ...state, users: action.users };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return { ...state };
  }
}
