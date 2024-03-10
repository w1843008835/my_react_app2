import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import chanelReducer from "./modules/chanelStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    chanel: chanelReducer,
  },
});
export default store;
