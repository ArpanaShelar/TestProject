import {createStore, combineReducers} from 'redux';
import nameReducer from './Reducer/UsernameReducer';
const rootReducer = combineReducers({username: nameReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
