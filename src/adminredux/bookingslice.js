import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name : "Booking",
    initialState : {
        value:[]
    },
    reducers :{
           Booking : (state,action) =>{
               state.value = action.payload
           }
    }
})

export const {Booking} = Slice.actions;
export default Slice.reducer;