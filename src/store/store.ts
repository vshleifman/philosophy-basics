import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "store/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
