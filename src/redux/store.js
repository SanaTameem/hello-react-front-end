import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './features/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
