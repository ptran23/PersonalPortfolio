import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

function SkillsComp({skillsItem}) {
  useEffect(() =>{
    Aos.init({duration:800 })
  },[])
  return (
    <div className='list'>
      {
        skillsItem.map((skillsItem) =>{
          return <div data-aos="zoom-in" className='skills-con' id={skillsItem.name} key={skillsItem.id} >
            <div className='skills-container' id = {skillsItem.name}>
              <h6> {skillsItem.image} </h6>
              <h2>{skillsItem.name}</h2>
            </div>

          </div>

        })
      }
    </div>
  )
}

export default SkillsComp