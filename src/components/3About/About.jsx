import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'
import photo from './myPhoto.png'
import './About.css'

const About = () => {
    return (
        <Container className='bg-dark text-light' fluid id='About'>
            <h1 className='d-flex justify-content-center pt-2 '>About <span className='ps-2' style={{'color':'yellow'}}>Me</span></h1>
            <Row>
                <Col md={4} className='mt-3 d-flex justify-content-center'>
                    <Image src={photo} fluid className='img'/>
                </Col>
                <Col className='mt-5 d-flex align-items-center px-2 text-justify'>
                    <p id='about-container-para'>I am Praveen, a passionate React developer with expertise in HTML, CSS, and JavaScript. 
                    I specialize in crafting dynamic and responsive web applications, bringing ideas to life through
                     clean and efficient code. With a strong foundation in front-end technologies, I thrive on creating 
                     engaging user experiences. I am committed to continuous learning and innovation in the ever-evolving
                      world of web development
                      </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About
