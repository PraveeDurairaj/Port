import React from 'react'
import './Projects.css'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import project_photo from './BMI.png'
import project_Photo2 from './landing page.png'
import project_Photo3 from './weatherApp.png'


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
              <h4 className='p-2 project-header'>BMI Calculator</h4>
              <p className='text-dark text-justify px-1'>
                A BMI calculator built with HTML, CSS, JavaScript, and React, providing users with a simple interface 
                to input their weight and height for quick body mass index calculations.with responsive design elements
                 for various screen sizes.
              </p>
            </div>
            <div className="project-btn-container">
              <Button variant="warning" className='px-3 py-1 button' href='https://github.com/PraveeDurairaj/BMI-calculator.git'>Github</Button>
              <Button variant="warning px-3 py-1 ms-3" className='button' href='https://monumental-nougat-ad6cf8.netlify.app'>Live</Button>
            </div>
          </div>
        </Col>


        <Col sm={12} lg={4}><div className="project-container">
          <div className="project-img-container">
            <Image src={project_Photo2} className='rounded w-100' />
          </div>
          <div className="project-text-container">
          <h4 className='p-2 project-header'> Restaurant Landing Page</h4>
            <p className='text-dark text-justify px-1'>
            A responsive restaurant landing page designed with HTML and CSS, featuring enticing visuals and easy
             navigation to showcase menu offerings. Seamlessly adapts to various screen sizes for viewing on desktops,
              tablets, and mobile devices.
            </p>
          </div>
          <div className="project-btn-container">
            <Button variant="warning" className='px-3 py-1 button' href='https://github.com/PraveeDurairaj/Restaurant-landing-page.git'>Github</Button>
            <Button variant="warning px-3 py-1 ms-3" className='button' href='https://devpraveen.neocities.org/Restaurant/'>Live</Button>
          </div>
        </div>
        </Col>


        <Col sm={12} lg={4}><div className="project-container" >
          <div className="project-img-container" >
            <Image src={project_Photo3} className='rounded w-100' />
          </div>
          <div className="project-text-container">
          <h4 className='p-2 project-header'>Weather App</h4>
            <p className='text-dark text-justify px-1 pb-1'> 
            A weather app built with HTML, CSS, JavaScript, and React, allowing users to input a city name and receive real-time weather updates, including temperature, wind speed,
            and weather conditions.and integrating user-friendly design 

            </p>
          </div>
          <div className="project-btn-container">
            <Button variant="warning" className='px-3 py-1 button'href='https://github.com/PraveeDurairaj/WeatherApp.git'>Github</Button>
            <Button variant="warning px-3 py-1 ms-3" className='button' href='https://eclectic-cranachan-17e126.netlify.app'>Live</Button>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects