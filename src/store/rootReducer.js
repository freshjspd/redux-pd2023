import counterReducer from '../reducers/CounterReducer';
import themeReducer from '../reducers/ThemeReducer';
//import themeReducer from '../slices/themeSlice';
import { combineReducers } from '@reduxjs/toolkit';
//import userReducer from '../reducers/userReducer';
import userReducer from '../slices/userSlice';

const rootReducer = combineReducers({
    counterReducer,
    themeReducer,
    userReducer
});

export default rootReducer;