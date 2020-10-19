import { createSlice } from "@reduxjs/toolkit";
import { PhilType } from "types/types";
import { AppThunk } from "store/store";
import axiosInstance from "api/axiosInst";

interface PhilosopherSliceState {
  philosophers: PhilType[];
}

export const philosopherSlice = createSlice({
  name: "philosopher",
  initialState: { philosophers: [] } as PhilosopherSliceState,
  reducers: {
    setPhilosophers(state, action) {
      const philosophersArr: PhilType[] = action.payload;
      philosophersArr.forEach((philo) => {
        state.philosophers[philo.philosopherId] = philo;
      });
    },
  },
});

export const setPhilosophersThunk = (): AppThunk => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/philosopher");
    dispatch(setPhilosophers(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const { setPhilosophers } = philosopherSlice.actions;

export default philosopherSlice.reducer;
