import { createSlice } from "@reduxjs/toolkit";


// function fun1(){
//     var ob={name:""}
//     var data =localStorage.getItem('name')
//     console.log(data)
//     if (data!=null){
//         var data1=JSON.parse(data)
//         ob=data1.value
//         console.log(ob)
//     }
//     return ob
// }



const Slice = createSlice({
    name : "UserName",
    initialState : {
        // value:fun1()
        value:{}
    },
    reducers :{
           UserName : (state,action) =>{
               state.value = action.payload
           }
    }
})

export const {UserName} = Slice.actions;
export default Slice.reducer;