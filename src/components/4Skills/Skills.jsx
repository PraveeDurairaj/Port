import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap';
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
    <h1 className='text-center bg-dark py-5 display-3'>Skills</h1>
    <Container fluid className='d-flex bg-dark justify-content-center gap-5 flex-wrap'>
        <div className='box  shadow-lg p-3 mb-5  rounded'><Image src={html} className='w-100  p-2'/><h4>HTML</h4></div>
        <div className='box shadow-lg p-3 mb-5  rounded'><Image src={css} className='w-100 p-2'/><h4>CSS</h4></div>
        <div className='box shadow-lg p-3 mb-5  rounded'><Image src={js} className='w-100 p-2'/><h3>Js</h3></div>
        <div className='box shadow-lg p-3 mb-5  rounded'><Image src={bootstrap} className='w-100 p-2 '/><h5 className='mt-2'>bootstrap</h5></div>
        <div className='box shadow-lg p-3 mb-5  rounded'><Image src={react} className='w-100 p-2'/><h4>React</h4></div>
        <div className='box shadow-lg p-3 mb-5  rounded'><Image src={git} className='w-100 p-2'/><h4>Github</h4></div>
    </Container>
    </>
    
  );
}

export default Skills
