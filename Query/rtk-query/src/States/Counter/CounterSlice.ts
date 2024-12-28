import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {state.value += 1},
    decrement: (state) => {
      if(state.value > 0){
        state.value -=1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
          console.log("incrementAsync.fulfilled");
        }
      );
  },
})

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number)=>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));
    return amount;
  })

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer