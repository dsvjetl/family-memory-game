import { createSlice } from '@reduxjs/toolkit';

const timeSlice = createSlice({
  name: 'time',
  initialState: {
    finalTime: '',
  },
  reducers: {
    add: (state, action) => {
      state.finalTime = action.payload;
    },
  },
});

export const { add, reset } = timeSlice.actions;
export default timeSlice.reducer;
