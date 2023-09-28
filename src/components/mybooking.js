import { useSelector } from "react-redux/es/hooks/useSelector"
import { URLS } from "../services/apiurls";
import webservice from "../services/apiurls";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import  { Booking } from "../adminredux/bookingslice";

export default function MyBooking(){

    // var id=useSelector(state=>state.user.value)
    var dispatch=useDispatch()
    var booking=useSelector(state=>state.booking.value)
 
   var remove=async(id)=>{
    const response = await webservice.putApiCall(URLS.BOOKING_CANCEL,id)
    console.log(response.data)
    if(response.data.status===true){
        var book=booking.filter(obj=>obj.items.itemId!=id)
        console.log(book)
        dispatch(Booking(book))
    }
   }
   
   return <>
    <h1 className="text-center mt-5"> Booking History</h1>
    <div className="container">
<table className="table mt-3">
    <tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>Date</th>
        <th>Status</th>
        <th>Image</th>
        <th>Cancel</th>
    </tr>
    {booking.map(obj=><>
    <tr>
        <td>{obj.itemId}</td>
        <td>{obj.items.itemName}</td>
        <td>{obj.providedDate}</td>
        <td>{obj.bookingStatus}</td>
        <td><img src={obj.items.itemImage} width={100} height={100}></img></td>
        <td><button type="button" class="btn btn-danger"onClick={()=>remove(obj.itemId)}>Cancel</button></td>
    </tr>
    </>)}
</table>
</div>
    </>
}