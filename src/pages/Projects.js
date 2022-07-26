import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/Projects.css"
import {ProjectList} from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1 className='title'> My Projects</h1>
      <div className="projectList">
        {ProjectList.map((projects,idx) =>{
          return <ProjectItem  id ={idx} name ={projects.name} key = {projects.name} image={projects.image}/>
        })}

      </div>
    </div>
  )
}

export default Projects