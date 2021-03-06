import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  page: 1,
  pages: 0,
  total: 0,
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    retrieve: () => {
    },
  },
});

export const { retrieve } = albumSlice.actions;

export default albumSlice.reducer;
