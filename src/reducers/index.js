import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';
const reducers = combineReducers({ user: userReducer, wallet: walletReducer });
export default reducers;
