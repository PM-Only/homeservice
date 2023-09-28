import { UserList } from "../adminredux/userlistslice";
import { URLS } from "../services/apiurls";
import webservice from "../services/apiurls";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux/es/hooks/useSelector";
function Userlist() {
   
    const list=useSelector(state=>state.ulist.value)
  var dispatch=useDispatch()
  
    useEffect(() => {
    //    loadlist()
},[])


// var loadlist = async()=>{
//     const response = await webservice.getApiCall(URLS.USER_LIST)
//     // console.log("the data is: ",response.data.data)
    
//     dispatch(UserList(response.data.data))
//     // console.log("the data is:",list)
// }
var h1style={
    textAlign:"center"
}
    return <>
        <h1 style={h1style} className="mt-5">All User's List</h1>
        {/* <div className="col-lg-10 col-12 text-center mx-auto">
                            <h2 className="mb-5">All User's List</h2>
                        </div> */}
        <div className="container">
        <table className="table table-striped">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Delete</th>
                </tr>
            </thead>

            <tbody>
            
                {list.map(obj=>
                <>
                <tr>
                    <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.email}</td>
                        <td>{obj.mobile}</td>
                        <td>{obj.address}, {obj.city}, {obj.state}</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                            </>)}
            </tbody>
        </table>
        </div>
    </>
}
export default Userlist