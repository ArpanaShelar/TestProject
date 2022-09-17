import {ACTION_TYPE} from '../Constants/Constants';
const initialState = {
  username: 'Amit',
};
const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SHOW_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
export default nameReducer;
