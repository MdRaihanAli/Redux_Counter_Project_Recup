import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{ value:0},
    reducers:{
        inc:(state)=>{ state.value+=1},
        dec:(state)=>{ state.value=state.value - 1},
        addNum: (state, actions)=>{state.value +=actions.payload}
    }
})

export const {inc, dec, addNum} = counterSlice.actions

export default counterSlice.reducer