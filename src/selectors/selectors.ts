import { RootState } from "../store/rootReducer";

export const periodsSelector = (state: RootState) => state.period;
export const philosophersSelector = (state: RootState) => state.philosopher;
