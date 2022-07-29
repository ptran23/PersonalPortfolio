import React from 'react'
import {useParams} from 'react-router-dom'
import {ProjectList} from '../helpers/ProjectList'
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1> {project.name}</h1>
        <img src = {project.image} />
        <p><b>Technologies:</b> {project.skills} </p>
        <div className='SVG'> 
          <h6> 
            {project.mongoSVG} 
            {project.cssSVG} 
            {project.htmlSVG} 
            {project.nodeSVG} 
            {project.reactSVG} 
            {project.webglSVG}
          </h6>
        </div>
        <div className='Details'>
          <h2>Summary</h2>
          <p>{project.detail}</p>  
        </div>
        <div className='Features'>
          <h2>Features</h2>
          <p> {project.feature}</p>
        </div>
        <div className='Code'>
          <a href={project.code}>Codes</a>
        </div>

    </div>
  )
}

export default ProjectDisplay