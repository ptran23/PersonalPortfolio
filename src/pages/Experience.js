import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css"
function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline  lineColor ="#000000" >
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date ="2022"
        iconStyle={{background:"rgb(33, 150, 243)", color:"#ffff"}}
        icon={<SchoolIcon/>}
        contentStyle={{ background: '#f2f2f2', borderTop: '5px solid #2196f3' }}
        contentArrowStyle={{ borderRight: '7px solid',  color : '#f2f2f2' }}
        
        >
          <h3 className = "vertical-timeline-element-title">Seneca College, Toronto Canada</h3>
          <p>Computer Programming</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date ="2021-2022"
        iconStyle={{background:"rgb(233, 30, 99)",color:"#ffff"}}
        contentStyle={{ background: '#f2f2f2', borderTop: '5px solid #e91e63'}}
        contentArrowStyle={{ borderRight: '7px solid',  color : '#f2f2f2' }}
        
        icon={<WorkIcon/>}
        >
          <h3 className = "vertical-timeline-element-title">Sitel, Remote</h3>
          <p>Customer Service Representative and Mentor</p>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience