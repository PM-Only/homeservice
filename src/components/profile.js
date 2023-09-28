// import Menu from "./components/menu";
import { URLS } from "../services/apiurls";
import webservice from "../services/apiurls";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginstatus } from "../adminredux/adminslice";
import { User } from "../adminredux/user";
import { UserType} from "../adminredux/utype";
import { Booking } from "../adminredux/bookingslice";
import { UserName } from "../adminredux/usernameslice";
import axios from "axios";
// import { useRef } from "react";
export default function Profile() { 
    var id = useSelector(state => state.user.value)
    var list=useSelector(state=>state.ulist.value)
    var photo=useRef()
    
    useEffect(() => {
        // getuser()
    }, [])
    
   var imgupload=async(e)=>{
    e.preventDefault()
    var frm =new FormData()
    frm.append("userId",id)
    frm.append("profileImage", photo.current.files[0])
    const response = await webservice.postApiCall(URLS.IMAGE_UPLOAD,frm)
    console.log(response.data)
   }
    return <>

    <h1>Profile components</h1>
    <div class="input-group mb-3">
        <form onSubmit={imgupload}>
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" ref={photo} class="form-control" id="inputGroupFile01"/>
  <button type="submit">Upload Your Photo</button>
  </form>
</div>
    {list.map(obj=>obj.id==id?<>
    <ul>
        <li>{obj.name}</li>
        <li>{obj.city}</li>
    </ul>
    </>:<></>)}
    </>
}