import React, {useEffect} from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/Projects.css"
import {ProjectList} from '../helpers/ProjectList'
import Aos from 'aos';
import "aos/dist/aos.css"
function Projects() {
    useEffect(() =>{
      Aos.init({duration:1000,once: true })
    },[])
    
  return (
    <div className='projects'>
      <h1 className='title'> My Projects</h1>
      <div data-aos="zoom-out" className="projectList">
        {ProjectList.map((projects,idx) =>{
          return <ProjectItem  id ={idx} name ={projects.name} key = {projects.name} image={projects.image}/>
        })}

      </div>
    </div>
  )
}

export default Projects