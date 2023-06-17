// in this file import all of reducers and combine them

import { combineReducers } from "redux";

import OTS from "../redux/reducer";

const createReducer = (asyncReducers?: any) =>
  combineReducers({
    OTS,
    ...asyncReducers,
  });

export default createReducer;
