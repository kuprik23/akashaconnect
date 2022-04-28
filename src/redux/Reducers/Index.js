import {combineReducers} from 'redux';
import {productReducers,cartReducers} from './productReducers';
const reducers = combineReducers({
    allProducts:productReducers,
    cart:cartReducers
});
export default reducers;