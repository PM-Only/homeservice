import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Menu from "./components/menu";
import Adminhome from "./components/adminhome";
import Userlist from "./components/userlist";
import Categories from "./components/categories";
import Services from "./components/services";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import UserHome from "./components/userhome";
import ItemDetail from "./components/itemdetails";
import MyBooking from "./components/mybooking";
import Profile from "./components/profile";
// import userEvent from "@testing-library/user-event";
function App() {
  const login=useSelector(state=>state.islogin.value)
  // const navigate= useNavigate()

  return <>
  <Menu/>
 <Routes>
  {login===true?<>
    <Route path="/adminhome" element={<Adminhome></Adminhome>}></Route>
  <Route path="/userlist" element={<Userlist></Userlist>}></Route>
  <Route path="/services" element={<Services></Services>}></Route>
  <Route path="/categories" element={<Categories></Categories>}></Route>
  <Route path="/mybooking" element={<MyBooking></MyBooking>}></Route>
  <Route path="/myprofile" element={<Profile></Profile>}></Route>
  <Route path="/userhome" element={<UserHome></UserHome>}></Route>
  <Route path="/itemdetail/:id" element={<ItemDetail></ItemDetail>}></Route>
  </>:
  <>
  <Route path="/" element={<Login></Login>}></Route>
  
  </>}
  
 </Routes>
  </>
}

export default App;
