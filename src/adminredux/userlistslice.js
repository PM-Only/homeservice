import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name : "UserList",
    initialState : {
        value:[]
    },
    reducers :{
           UserList : (state,action) =>{
               state.value = action.payload.sort((a, b) => b.id - a.id)
           }
    }
})

export const {UserList} = Slice.actions;
export default Slice.reducer;