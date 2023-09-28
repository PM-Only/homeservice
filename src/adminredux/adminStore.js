import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../adminredux/adminslice"
import UserList from "../adminredux/userlistslice"
import  CateList  from "../adminredux/cateslice"
import ServiceList from "../adminredux/serviceslice"
import User from "../adminredux/user"
import UType from "../adminredux/utype"
import Booking from "../adminredux/bookingslice"
import UName from "../adminredux/usernameslice"
const store=configureStore({
    reducer:{
        islogin:adminReducer,
        ulist:UserList,
        catelist:CateList,
        servicelist:ServiceList,
        user:User,
        utype:UType,
        booking:Booking,
        username:UName
    }
})
store.subscribe(()=>{
    var str=JSON.stringify(store.getState().islogin)
    localStorage.setItem('data',str)
    var str1=JSON.stringify(store.getState().user)
    localStorage.setItem('user',str1)
    // var str2=JSON.stringify(store.getState().username)
    // localStorage.setItem('name',str2)
})
export default store