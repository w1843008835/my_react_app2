import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    inscrement(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});
const { inscrement, decrement } = counterStore.actions;
const reducer = counterStore.reducer;
export { inscrement, decrement };
export default reducer;
