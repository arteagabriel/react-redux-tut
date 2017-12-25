import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import usersReducer from './reducers/users';
import userProfile from './reducers/userProfile';

export default createStore(
  combineReducers({
    usersReducer,
    userProfile
  }),
  applyMiddleware(
    createLogger(),
    promise()
  )
);
