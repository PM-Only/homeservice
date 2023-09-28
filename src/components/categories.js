// import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useEffect,ref, useRef, useState } from "react"
import { CateList } from "../adminredux/cateslice"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { URLS } from "../services/apiurls";
import webservice from "../services/apiurls";
function Categories() {
    // const [service,setservice]=useState([])
    var list = useSelector(state => state.catelist.value)
    const service= useSelector(state=>state.servicelist.value)
    var dispatch = useDispatch()
    var nameBox=useRef()
    var serviceBox=useRef()
    var deptBox=useRef()
    var priceBox=useRef()
    var imageBox=useRef()
    useEffect( () => {
        // getlist()
    }, [])
    // list.sort((a, b) => parseInt(b.id) - parseInt(a.id));

// var getlist=async()=>{
//     const response = await webservice.getApiCall(URLS.CATE_LIST)
//     const res=await webservice.getApiCall(URLS.SERVICE_LIST)
//     console.log("sevice is: ",res.data)
//     setservice(res.data.data)
   
//     dispatch(CateList(response.data.data))
// }


    var savecate=async(e)=>{
            e.preventDefault()
            var frm =new FormData()
            frm.append( "itemName", nameBox.current.value)
            frm.append("serviceTypeId",serviceBox.current.value)
            frm.append("description",deptBox.current.value)
            frm.append("price",priceBox.current.value)
            frm.append("itemImage",imageBox.current.files[0])
            
        const response = await webservice.postApiCall(URLS.CATE_SAVE,frm)
        console.log("data saved: ",response.data)
        }
    var h1style = {
        textAlign: "center",
        backgroundcolor: "red"
    }

    return <>
                <h1 className="mt-5" style={h1style}>Add New Category</h1>
        <div className="container">
            <form onSubmit={savecate}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="text" ref={nameBox} name="cateItem" className="form-control _ge_de_ol" placeholder="Enter Category Item" required="" aria-required="true" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <select ref={serviceBox} className="form-control">
                                <option>Select Service</option>
                                {service.map(obj=><option value={obj.id}>{obj.serviceType}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="text" ref={deptBox} name="deptItem" className="form-control _ge_de_ol" placeholder="Enter Description" required="" aria-required="true" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                        <input type="number" ref={priceBox} name="priceItem" className="form-control _ge_de_ol" placeholder="Enter Price" required="" aria-required="true" />

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="file" ref={imageBox} name="imageItem" className="form-control _ge_de_ol" required="" aria-required="true" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>


            </form>
        </div>












              <div className="container mt-5">
              <h1 style={{textAlign:"center",backgroundColor:"CaptionText",color:"white"}}>All Categories</h1>
  
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Service</th>
                        <th>Image</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>

                    {list.map(obj =>
                        <>
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.itemName}</td>
                                <td>{obj.description}</td>
                                <td>{obj.price}</td>
                                <td>{obj.serviceTypeId}</td>
                                <td><img src={obj.itemImage} width={100} height={100}></img></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        </>)}
                </tbody>
            </table>
        </div>
    </>
}
export default Categories