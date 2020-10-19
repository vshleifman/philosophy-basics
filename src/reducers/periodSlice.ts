import { createSlice } from "@reduxjs/toolkit";
import { PeriodDataType } from "types/types";
import { AppThunk } from "store/store";
import axiosInstance from "api/axiosInst";

interface PeriodSliceState {
  periods: PeriodDataType[];
}

export const periodSlice = createSlice({
  name: "period",
  initialState: { periods: [] } as PeriodSliceState,
  reducers: {
    setPeriods(state, action) {
      const periodsArr: PeriodDataType[] = action.payload;
      periodsArr.forEach((period) => {
        state.periods[period.period_id] = period;
      });
    },
  },
});

export const setPeriodsThunk = (): AppThunk => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/period");
    dispatch(setPeriods(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const { setPeriods } = periodSlice.actions;

export default periodSlice.reducer;
