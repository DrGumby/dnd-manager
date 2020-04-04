import { combineReducers } from 'redux';
import players from './players';
import items from './items';
export default combineReducers({
    players,
    items
});