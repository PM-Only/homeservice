import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name : "CateList",
    initialState : {
        value:[]
    },
    reducers :{
           CateList : (state,action) =>{
               state.value = action.payload.sort((a, b) => b.id - a.id)
           }
    }
})

export const {CateList} = Slice.actions;
export default Slice.reducer;