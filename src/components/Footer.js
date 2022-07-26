import React from 'react'
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import {Link} from "react-router-dom"
import "../styles/Footer.css"
function Footer() {
  return (
    <div className ="footer">
        <div className='socialMedia'>
           <a href='mailto:pete.one@outlook.com'><EmailIcon/></a>
            <a href='https://www.linkedin.com/in/peter-tran-416279140/'><LinkedInIcon/></a>
            <a href='https://github.com/ptran23'><GithubIcon/></a>
        </div>
        <div className = "links">
                <Link to ="/">Home</Link>
                <Link to ="/projects">Projects</Link>
                <Link to ="/contact">Contact</Link>   
        </div>
        <p> &copy; 2022 PT</p>

    </div>
  )
}

export default Footer