// import { useDispatch } from "react-redux"
import { useEffect,ref, useRef } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { URLS } from "../services/apiurls";
import webservice from "../services/apiurls";
import { ServiceList } from "../adminredux/serviceslice";
import { ServiceRemove,ServiceSave } from "../adminredux/serviceslice";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Services(){
var serveBox=useRef()
const dispatch=useDispatch()
const service=useSelector(state=>state.servicelist.value)
var [temp,settemp]=useState(false)
useEffect( () => {
    //   loadservice()
    }, [])


// var loadservice=async()=>{
//     const response = await webservice.getApiCall(URLS.SERVICE_LIST)
//     console.log("the cate list is: ", response)
//     dispatch(ServiceList(response.data.data))
// }

var delService=async(id)=>{
    var a=window.confirm("Are you sure want to delete?")
    // console.log(a)
    if(a==true){
        settemp(true)
        const response = await webservice.deleteApiCall(URLS.SERVICE_DELETE,id)  
    
        dispatch(ServiceRemove(id)) 
    }

   
    settemp(false)
    // console.log(response.data)
}

var saveService=async(e)=>{
e.preventDefault()
var ob= {
    "serviceType":serveBox.current.value
}
const response = await webservice.postApiCall(URLS.SERVICE_SAVE,ob)  
console.log(response.data.data)
dispatch(ServiceSave(response.data.data))


}
var h1style = {
    textAlign: "center",
}
    return <>

<form onSubmit={saveService}>
    <input type="text" ref={serveBox} placeholder="Enter service name"></input>
    <button type="submit">Save</button>
</form>




    <h1 className="mt-5" style={h1style}>All Services</h1>
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sevice Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>

   {temp?<><div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div></>:<></>} 
                    {service.map(obj =>
                        <>
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.serviceType}</td>
                                <td><button onClick={()=>delService(obj.id)} className="btn btn-danger">Delete</button></td>
                    
                             
                    
                    
                            </tr>
                        </>)}
                </tbody>
            </table>
        </div>
    </>
}
export default Services