import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  movies: moviesReducer,
  login: loginReducer
});
