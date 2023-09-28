import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name : "UserType",
    initialState : {
        value:"User"
    },
    reducers :{
           UserType : (state,action) =>{
               state.value = action.payload
           }
    }
})

export const {UserType} = Slice.actions;
export default Slice.reducer;