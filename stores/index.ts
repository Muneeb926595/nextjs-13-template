import createReducer from "./reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const middlewares = [thunk];

const store = configureStore({
  reducer: createReducer(),
  middleware: middlewares,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
