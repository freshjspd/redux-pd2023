import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/CounterReducer';

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;