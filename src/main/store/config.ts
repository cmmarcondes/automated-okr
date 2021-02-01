import { createStore, combineReducers } from 'redux';
import { dataReducer } from './reducers/datasReducer';

const reducers = combineReducers({
  datas: dataReducer,
});

function config() {
  return createStore(reducers);
}

export default config;
