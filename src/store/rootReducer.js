import counterReducer from '../reducers/CounterReducer';
import themeReducer from '../reducers/ThemeReducer';
//import themeReducer from '../slices/themeSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    counterReducer,
    themeReducer,
});

export default rootReducer;