import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useEffect, useState } from "react"
import { useRef } from "react"
export default function ItemDetail() {
    var person=useRef()
    // var [item,setitem]=useState({})
    var { id } = useParams()
    var list = useSelector(state => state.catelist.value)
    var userid = useSelector(state => state.user.value)
    
    var booking=(e)=>{
        e.preventDefault()
        const today = new Date();
        // const livedate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        // const livetime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var ob={
            userId: userid,
            itemId: id,
            personQty:person.current.value,
            providedDate:today.toLocaleDateString(),
            time:today.toLocaleTimeString().slice(0,8)

        }
        console.log(ob)
    }
    return <>
        <div className="container single_product_container mt-5">
    

            <div className="row">
                {list.map(obj => obj.id == id ? <>
                    <div className="col-lg-7">
                        <div className="single_product_image">
                            <img className="card-img-top" src={obj.itemImage} width={300} height={500} />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="product_details">
                            <div className="product_details_title">
                            <h2>{obj.itemName}</h2>
						<p>{obj.description}</p>
					<br></br>
                    <br></br>
                    <div className="product_price">Price Rs. <b>{obj.price}</b></div>
                            </div>
                            <form onSubmit={booking}>
                            <div className="mt-3">
                                <label>Select Person Quantity</label>
                        <select className="form-control" ref={person}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            </select>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-primary">Confirm Booking</button>
                                </div>   
                            </form>
                             
                        </div>
                    </div>





                </> : "")}
            </div>





        </div>
    </>


}