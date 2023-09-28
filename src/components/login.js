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
function Login() {
  var [msg, setmsg] = useState("")
  var emailBox = useRef()
  var passBox = useRef()
  var navigate = useNavigate()
  var dispatch = useDispatch()
  var [temp,settemp]=useState(false)
  var id=useSelector(state=>state.user.value)
  // var status=useSelector(state=>state.islogin.value)

// console.log(status)
useEffect(()=>{
  // dispatch(User(id))

},[])




  var login = async (event) => {
    event.preventDefault()
    settemp(true)
    var ob = {
      email: emailBox.current.value,
      password: passBox.current.value
    }
    const response = await webservice.postApiCall(URLS.ADMIN_LOGIN, ob)
    // console.log(response.data.data)
    settemp(false)
    setmsg(response.data.msg)
    if (response.data.status === true) {
      // dispatch login status to redux
      dispatch(loginstatus(response.data.status))

      // dispatch userid to redux
      dispatch(User(response.data.data.userid))

      //Get all user list and find login user and dispatch user type to redux 
      const res = await webservice.getApiCall(URLS.USER_LIST)
      dispatch(UserType(res.data.data.find(obj=>obj.id===response.data.data.userid).type))
    

      // dispatch user info to redux to get name and other details
     dispatch(UserName(res.data.data.find(ob=>ob.id===response.data.data.userid)))
      

      // Get all booking and filter user booking and dispatch to redux
      const response2 = await webservice.getApiCall(URLS.BOOKING_USER)
      var book=response2.data.data.filter(obj=>obj.user.id==id)
      dispatch(Booking(book))
      // navigate("/adminhome")
    }
    else {
      alert("invalid Username or Password")
      // navigate("/")
    }
  }

  return <>
    <section className="form-02-main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="_lk_de">
              <div className="form-03-main">
                <form onSubmit={login}>
                  <div className="logo">
                    <img src="assets/images/user.png" />
                  </div>
                  <div className="form-group">

                    <input type="email" ref={emailBox} name="email" className="form-control _ge_de_ol" placeholder="Enter Email" required="" aria-required="true" />
                  </div>

                  <div className="form-group">
                    <input type="password" ref={passBox} name="password" className="form-control _ge_de_ol" placeholder="Enter Password" required="" aria-required="true" />
                  </div>

                  <div className="checkbox form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" for="">
                        Remember me
                      </label>
                    </div>
                    <a href="#">Forgot Password</a>
                  </div>

                  <div className="form-group">

                    <button className="_btn_04" type="submit">Login</button>

                  </div>

                 {temp?<><div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div></>:<></>} 

                  <p>{msg}</p>
                  <div className="form-group nm_lk"><p>Or Login With</p></div>

                  <div className="form-group pt-0">
                    <div className="_social_04">
                      <ol>
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-google-plus"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                      </ol>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Login;