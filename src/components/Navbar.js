import React, { useEffect, useState } from 'react'
import {NavLink,useLocation} from "react-router-dom"
import "../styles/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function Navbar() {
  const [expandNavBar, setExpandNavBar] = useState(false)
  const location = useLocation()
  //runs use effect when location changes , if ? "id =false" : "id =true"
  useEffect(()=> {
    setExpandNavBar(false)
  },[location])


  return (
    //if true set expandNbar to  id open if false set  to close 
    <div className ="navbar" id ={expandNavBar ? "open"  : "close"}>  
        <div className="toggleButton">
            <button onClick ={() => {
              setExpandNavBar ((prev) =>!prev) // setting setExpandNavBar to the opposite of its current state
              }}> 
              <ReorderIcon/></button>
        </div>   
         
        <div className = "links">
                <NavLink to ="/"   className={({ isActive }) => (isActive ? "link-active" : "link")}>HOME</NavLink>
                <NavLink to ="/projects"  className={({ isActive }) => (isActive ? "link-active" : "link")}>PROJECTS</NavLink>
                <NavLink to ="/contact"   className={({ isActive }) => (isActive ? "link-active" : "link")} >CONTACT</NavLink>   
        </div>
    </div>
  )
}

export default Navbar