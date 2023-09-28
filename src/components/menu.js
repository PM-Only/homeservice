import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginstatus } from "../adminredux/adminslice";
import { useEffect, useState } from "react";
import { UserList } from "../adminredux/userlistslice";
import { ServiceList } from "../adminredux/serviceslice";
import { CateList } from "../adminredux/cateslice";
import { URLS } from "../services/apiurls";
import webservice from "../services/apiurls";
import { User } from "../adminredux/user";
import { UserType} from "../adminredux/utype";
import { UserName } from "../adminredux/usernameslice";
import { Booking } from "../adminredux/bookingslice";
function Menu() {

  const login = useSelector(state => state.islogin.value)
  const type = useSelector(state => state.utype.value)
  const data = useSelector(state => state.username.value)
  var id=useSelector(state=>state.user.value)
  var dispatch = useDispatch()
  var navigate = useNavigate()
  // var [type,setType]=useState("User")
  var logout = () => {
    console.log("user logout successfully")
    dispatch(loginstatus(false))
    localStorage.clear()
    navigate("/")
  }
  useEffect(() => {
    checklogin()
  }, [])


  var checklogin = async () => {
    // const res = await webservice.getApiCall(URLS.USER_LIST)
    // console.log("the uid is: ",uid)
    // var test=res.data.data.filter(obj=>obj.id===uid? setType(obj.type):setType("User")
    // )
    // console.log("User is :",test)
    if (login) {
      //get user list
      const res = await webservice.getApiCall(URLS.USER_LIST)
      dispatch(UserList(res.data.data))

      // get service list
      const response1 = await webservice.getApiCall(URLS.SERVICE_LIST)
      dispatch(ServiceList(response1.data.data))

      // get category list
      const response2 = await webservice.getApiCall(URLS.CATE_LIST)
      dispatch(CateList(response2.data.data))
      // navigate("/adminhome")

      // // get booking list
      // dispatch(User(id))
      // // console.log("the user data is: ", data)
      // console.log("the user id is :",id)
      if(id!=""){
        const res = await webservice.getApiCall(URLS.USER_LIST)
        dispatch(UserType(res.data.data.find(obj=>obj.id===id).type))
        dispatch(UserName(res.data.data.find(ob=>ob.id===id)))
        const response2 = await webservice.getApiCall(URLS.BOOKING_USER)
        var book=response2.data.data.filter(obj=>obj.user.id==id)
        dispatch(Booking(book))
      }
    }
  }


  return <>


    <nav className="navbar navbar-expand-lg bg-light shadow-lg">
      <div className="container">
        <Link className="navbar-brand" to="/adminhome">
          <img src="assets/images/logo.png" width={50} height={50}></img>
          <span>
            Home Services
            <small>Non-profit Organization</small>
          </span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">


          {login === true ? <>

            {type === "User" ? <>


              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link click-scroll active" to="/userhome">User Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link click-scroll active" to="/mybooking">My Order</Link>
                </li>
                {/* <li className="nav-item">
                <b className="nav-link click-scroll" aria-current="page" onClick={logout} >Logout</b>
              </li> */}




                <li className="nav-item dropdown pe-3">

                  <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img style={{ height: "30px" }} src="assets/images/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">{data.name}</span>
                  </a>

                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                      <h6>{data.name}</h6>
                      {/* <span>Web Designer</span> */}
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <Link to={"/myprofile"}><span>My Profile</span></Link>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    {/* <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li> */}
                    <li>
                      {/* <hr className="dropdown-divider"/> */}
                    </li>

                    {/* <li>
              <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i className="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li> */}
                    <li>
                      {/* <hr className="dropdown-divider"/> */}
                    </li>

                    <li>
                      <a className="dropdown-item d-flex align-items-center" onClick={logout} >
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                      </a>
                    </li>






                  </ul>
                </li>
              </ul>
            </> : <>
              <ul className="navbar-nav ms-auto">
           
                <li className="nav-item">
                  <Link className="nav-link click-scroll active" to="/adminhome">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link click-scroll" aria-current="page" to="/userlist">User List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link click-scroll" aria-current="page" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link click-scroll" aria-current="page" to="/categories">Categories</Link>
                </li>

                <li className="nav-item dropdown pe-3">

                  <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img style={{ height: "30px" }} src="assets/images/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">{data.name}</span>
                  </a>

                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                      <h6>{data.name}</h6>
                
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" onClick={logout} >
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                      </a>
                    </li>






                  </ul>
                </li>



              </ul>
            </>}

          </> : <>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link click-scroll active" aria-current="page" to="/adminhome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link click-scroll" aria-current="page" to="/">Login</Link>
              </li>
            </ul>
          </>}

        </div>
      </div>
    </nav>












  </>
}

export default Menu;