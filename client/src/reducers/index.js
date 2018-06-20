import { combineReducers } from 'redux';
import photographers from './photographers';
import videographers from './videographers';

const rootReducer = combineReducers({
  photographers,
  videographers,
});

export default rootReducer;
