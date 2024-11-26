import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const carroSlice = createSlice({
  name: 'carro',
  initialState,
  reducers: {
    aggCarro: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    elimiCarro: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      
    },
    limCarro: (state) => {
      state.items = [];
    },
  },
});

export const { aggCarro, elimiCarro, limCarro } = carroSlice.actions;

export default carroSlice.reducer;
