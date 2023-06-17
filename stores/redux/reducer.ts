import { combineReducers } from "redux";

import auth from "../auth/AuthReducers";

const OTS = combineReducers({
  auth,
});

export default OTS;
