import {combineReducers} from 'redux'; 
import heroReducer from './heroReducer';  
import enemyReducer from './enemyReducer';

const rootReducer = combineReducers({
  heroReducer: heroReducer, 
  enemyReducer: enemyReducer
});

export default rootReducer;
