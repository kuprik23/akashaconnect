import {createStore} from 'redux';
// import reducers from './Reducers/Index';
import reducers from './Reducers/Index.js';
const store=createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;