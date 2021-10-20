import { createSlice } from '@reduxjs/toolkit';


const initialState = {
 authorized: false
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
    setAuthorized: (state, action) => {
      state.authorized = action.payload;
    },
  },
});

export const { setAuthorized } = dataSlice.actions;

export const selectAuthorized = (state) => state.data.authorized;

export default dataSlice.reducer;
