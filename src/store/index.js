import { createStore} from 'redux';

import rootReducer from './../Reducer/index.js';



let store=createStore(rootReducer);
console.log('store');

export default store