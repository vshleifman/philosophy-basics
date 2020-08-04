import { combineReducers } from "@reduxjs/toolkit";
import periodReducer from "../reducers/periodSlice";
import philosopherReducer from "../reducers/philosopherSlice";

const rootReducer = combineReducers({
  period: periodReducer,
  philosopher: philosopherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
