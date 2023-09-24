import { createStore, combineReducers } from 'redux';
import themeReducer from '../reducers/themeReducer';
import taskReducer from '../reducers/taskReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  tasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;