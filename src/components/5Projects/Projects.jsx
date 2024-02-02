import React from 'react'
import './Projects.css'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import project_photo from './quote-6734894 (1).jpg'

const Projects = () => {
  return (
    <Container fluid className='bg-dark text-light' id='Projects'>
      <h1 className='text-center py-4'><span>My</span> Projects</h1>
      <Row lg={12} className='d-flex justify-content-center align-items-center'>
        <Col sm={12} lg={4}>
          <div className="project-container">
            <div className="project-img-container">
              <Image src={project_photo} className='rounded w-100' />
            </div>
            <div className="project-text-container">
              <p className='text-dark text-justify px-1'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloresapiente consequuntur
                laborum, animi est at quibusdam explicabo repellendus voluptatibus quis in ullam
              </p>
            </div>
            <div className="project-btn-container">
              <Button variant="warning" className='px-3 py-1 button'>Github</Button>
              <Button variant="warning px-3 py-1 ms-3" className='button'>Live</Button>
            </div>
          </div>
        </Col>


       <Col sm={12} lg={4}><div className="project-container">
        <div className="project-img-container">
            <Image src={project_photo} className='rounded w-100' />
          </div>
          <div className="project-text-container">
            <p className='text-dark text-justify px-1'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloresapiente consequuntur
              laborum, animi est at quibusdam explicabo repellendus voluptatibus quis in ullam
            </p>
          </div>
           <div className="project-btn-container">
            <Button variant="warning" className='px-3 py-1 button'>Github</Button>
            <Button variant="warning px-3 py-1 ms-3" className='button'>Live</Button>
           </div>
         </div>
       </Col>


        <Col sm={12} lg={4}><div className="project-container" >
          <div className="project-img-container" >
            <Image src={project_photo} className='rounded w-100' />
          </div>
          <div className="">
            <p className='text-dark text-justify px-1'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloresapiente consequuntur
              laborum, animi est at quibusdam explicabo repellendus voluptatibus quis in ullam
            </p>
          </div>
          <div className="project-btn-container">
            <Button variant="warning" className='px-3 py-1 button'>Github</Button>
            <Button variant="warning px-3 py-1 ms-3" className='button'>Live</Button>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects