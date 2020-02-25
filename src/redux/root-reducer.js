//npm install redux redux-logger react-redux
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});