import {combineReducers} from 'redux'; 
import heroReducer from './hero_reducer';  
import enemyReducer from './enemy_reducer'; 
import messagesReducer from './messages_reducer';

const rootReducer = combineReducers({
  hero: heroReducer, 
  enemy: enemyReducer, 
  messages: messagesReducer
});

export default rootReducer;
