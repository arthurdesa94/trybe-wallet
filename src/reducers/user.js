import { EMAIL_STORE } from '../actions';

const initialState = {
  email: '',
};

function user(state = initialState, { type, email }) {
  switch (type) {
  case EMAIL_STORE:
    return { ...state, email };
  default:
    return state;
  }
}

export default user;
