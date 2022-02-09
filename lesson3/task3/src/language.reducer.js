import { SET_LANG } from './language.actions';

export const langReducer = (state = 'en', action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_LANG:
      return action.payload;
    default:
      return state;
  }
};
