import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const chanelStore = createSlice({
  name: "chanel",
  initialState: {
    chanelList: [],
  },
  reducers: {
    setChanels(state, action) {
      state.chanelList = action.payload;
    },
  },
});

const { setChanels } = chanelStore.actions;
const fetchChanelList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChanels(res.data.data.channels));
  };
};

export { fetchChanelList };
const reducer = chanelStore.reducer;
export default reducer;
