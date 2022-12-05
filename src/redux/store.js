import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filter from './slices/filterSlice'

export const store = configureStore({
  reducer: { filter,},
});