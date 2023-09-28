import { createSlice } from "@reduxjs/toolkit";

function fun1(){
    var ob=""
    var data =localStorage.getItem('user')
    // console.log(data)
    if (data!=null){
        var data1=JSON.parse(data)
        ob=data1.value
        console.log(ob)
    }
    return ob
}




const Slice = createSlice({
    name : "User",
    initialState : {
        value:fun1()
    },
    reducers :{
           User : (state,action) =>{
               state.value = action.payload
           }
    }
})

export const {User} = Slice.actions;
export default Slice.reducer;