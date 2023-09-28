import { createSlice } from "@reduxjs/toolkit";

function fun1(){
    var ob=false
    var data =localStorage.getItem('data')
    if (data!=null){
        var data1=JSON.parse(data)
        ob=data1.value
    }
    return ob
}




const slice=createSlice({
    name: 'admin',
    initialState:{
        value:fun1()
    },
    reducers:{
        loginstatus:(state,action)=>{
            state.value=action.payload
        }  
    }
})

export const {loginstatus}=slice.actions
export default slice.reducer