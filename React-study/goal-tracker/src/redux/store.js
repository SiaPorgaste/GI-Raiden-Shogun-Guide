import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalReducer";

const store = configureStore({
  reducer: {
    goals: goalReducer,
  },
});

export default store;
