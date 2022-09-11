import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  pageIndex: 0,

};
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updatePageIndex: (state, action) => {
      state.pageIndex = action.payload.pageIndex;

    },
  }
});
export const { updatePageIndex } = taskSlice.actions;
export default taskSlice.reducer;