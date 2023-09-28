import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name : "ServiceList",
    initialState : {
        value:[]
    },
    reducers :{
           ServiceList : (state,action) =>{
               state.value = action.payload.sort((a, b) => b.id - a.id)
           },
           ServiceRemove :(state,action)=>{
            state.value= state.value.filter(ob=>ob.id!=action.payload)
           },
           ServiceSave:(state,action)=>{
            // state.value=state.value.push(action.payload)
            state.value=[...state.value,action.payload]
           }
    }
})

export const {ServiceList,ServiceRemove,ServiceSave} = Slice.actions;
export default Slice.reducer;