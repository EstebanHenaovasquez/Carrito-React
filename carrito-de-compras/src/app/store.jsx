import { configureStore } from '@reduxjs/toolkit';
import carroReducer from '../carac/carro/carroSlice';

export const store = configureStore({
  reducer: {
    carro: carroReducer,
  },
});

export default store;
