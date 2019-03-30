import {combineReducers} from 'redux'; 
import heroReducer from './hero_reducer';  
import enemyReducer from './enemy_reducer';

const rootReducer = combineReducers({
  hero: heroReducer, 
  enemy: enemyReducer
});

export default rootReducer;
