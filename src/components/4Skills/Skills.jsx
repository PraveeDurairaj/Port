import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import html from './html5 (1).svg'
import css from './css3-alt.svg'
import js from './js.svg'
import bootstrap from './bootstrap.svg'
import react from './react.svg'
import git from './github.svg'
import './Skills.css'




const Skills = () => {
  return (
    <>
      <h1 id='skill-header' className='text-center bg-dark text-light py-5'><span>My</span> Skills</h1>
      <Container fluid className='d-flex bg-dark justify-content-center align-items-center flex-wrap flex-column'>
        <Row className='gap-3'>
          <Col><div className='box  shadow-lg p-3 mb-5  rounded'><Image src={html} className='w-100  p-2' /><h4>HTML</h4></div></Col>
          <Col><div className='box shadow-lg p-3 mb-5  rounded'><Image src={css} className='w-100 p-2' /><h4>CSS</h4></div></Col>
          <Col><div className='box shadow-lg p-3 mb-5  rounded'><Image src={js} className='w-100 p-2' /><h3>Js</h3></div></Col>
        </Row>
        <Row className='gap-3'>
          <Col><div className='box shadow-lg p-3 mb-5  rounded'><Image src={bootstrap} className='w-100 p-2 ' /><h5 className='mt-2'>bootstrap</h5></div></Col>
          <Col> <div className='box shadow-lg p-3 mb-5  rounded'><Image src={react} className='w-100 p-2' /><h4>React</h4></div></Col>
          <Col><div className='box shadow-lg p-3 mb-5  rounded'><Image src={git} className='w-100 p-2' /><h4>Github</h4></div></Col>
        </Row>
      </Container>
    </>

  );
}

export default Skills
