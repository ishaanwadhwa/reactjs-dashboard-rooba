import NavBar from "../../components/navBar/NavBar"
import OverView from "./components/overview/Overview"
import './dashboard.scss'

export default function Dashbaord() { 


    return<div className="dashboard container-fluid">
<div className="row" style={{width : "100%"}} >
    <div className="col-md-3">
    <NavBar/>
    </div>

    <div class = 'col-md-9'>
       
    <OverView />
    </div>

   
   
    </div>
    </div>




}



