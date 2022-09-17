import {SHOW_USERNAME} from '../Constants/Constants';
const show_username = username => {
  return {
    type: SHOW_USERNAME,
    payload: username,
  };
};
export default {
  show_username,
};
