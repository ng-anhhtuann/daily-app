import {createStore, combineReducers} from 'redux';
import testReducer from '../reducers';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({testReducer});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
