import React from 'react'
import './Skills.css'
import { Container } from 'react-bootstrap'

const Skills = () => {
  return (
    <Container fluid className='bg-dark pt-3'>
      <h1 className='d-flex justify-content-center text-light py-5'><span style={{'color':'yellow'}} className='me-2'>My</span> Skills</h1>
      <div className="skills-container-list-of-skills">
        <div className="progress" style={{'--i':'60'}}>
            <h3>60<span>%</span></h3>
            <h4>React</h4>
        </div>
        <div className="progress" style={{'--i':'70'}} >
            <h3>70<span>%</span></h3>
            <h4 className='fs-2'>JS</h4>
        </div>
        <div className="progress" style={{'--i':'65'}}>
            <h3>65<span>%</span></h3>
            <h4>CSS</h4>
        </div>
        <div className="progress" style={{'--i':'70'}}>
            <h3>70<span>%</span></h3>
            <h4>HTML</h4>
        </div>
        <div className="progress" style={{'--i':'50'}}>
            <h3>50<span>%</span></h3>
            <h4>GitHub</h4>
        </div>
        <div className="progress" style={{'--i':'60'}}>
            <h3>60<span>%</span></h3>
            <h4>VsCode</h4>
        </div>
      </div>
    </Container>
  )
}

export default Skills
