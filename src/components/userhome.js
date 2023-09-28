import { useDispatch } from "react-redux"
import { useEffect,ref, useRef, useState } from "react"
import { CateList } from "../adminredux/cateslice"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { URLS } from "../services/apiurls";
import webservice from "../services/apiurls";
import { Link } from "react-router-dom";

export default function UserHome() {
    var list = useSelector(state => state.catelist.value)

    

    return <>

<div className="container mt-5">
    <h1 className="text-center text-dark">Select Your Service</h1>
  <div className="row">
    {list.map((obj, index) => (
      <div key={obj.id} className="col-lg-3">
        <Link to={`/itemdetail/${obj.id}`} className="link-no-underline">
          <div className="card">
            <img className="card-img-top" src={obj.itemImage} width={400} height={300} alt={obj.itemName} />
            <div className="card-body text-center">
             <b> <p className="card-text text-danger">{obj.itemName}</p></b>
              RS. <b>{obj.price}</b>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>




{/*     
<div className="container mt-5">
        <div className="row">
           {list.map(obj=><>
            <Link to={`/itemdetail/${obj.id}`}>
            <div className="col-lg-3 d-flex">
            <div className="card">
            <img className="card-img-top" src={obj.itemImage} width={400} height={300} />
            <div className="card-body text-center" >
              <p className="card-text">{obj.itemName}</p>
              RS.<b>{obj.price}</b>
            </div>
          </div>
        </div>
        </Link>
        </>
        )}
        </div>

        </div> */}
    </>
}