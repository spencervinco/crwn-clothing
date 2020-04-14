//npm install redux redux-logger react-redux
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'root', // at what point inside our reducer object do we want to start storing everything
  storage,
  whitelist: ['cart'] // string names of the reducers we want to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer
});


export default persistReducer(persistConfig, rootReducer);