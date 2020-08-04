import { combineReducers } from "@reduxjs/toolkit";
import periodReducer from "./reducers/periodSlice";

const rootReducer = combineReducers({
  period: periodReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
