import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/CounterReducer';
import themeReducer from '../reducers/ThemeReducer';

const store = configureStore({
  reducer: {
    counterReducer,
    themeReducer,
  },
});

export default store;