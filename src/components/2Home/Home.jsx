import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './Home.css';
import linkedIn from './linkedin.png'
import gitHub from './github.png'




const Home = () => {
  return (

    <Container fluid className='bg-dark text-light mt-0 ' id='Home'>
      <div className='home-container py-5'>
        <p className='pt-5 ps-4 fs-3'>Hello</p>
        <h1 className='ps-4 display-1'>I'm <span>Praveen</span></h1>
        <h1 className='ps-4 display-1' >React Developer</h1>
        <p className='ps-4 my-3'>As a React Developer. I Spaclallze In Bullding
          Interactive and responsive user interfaces using the React libray</p>
        <div className="intro-icons-container ps-4 mt-3">
          <div className="linkedIn-container icon-container">
            <img src={linkedIn} alt="" />
            <p>LinkedIn</p>
          </div>
          <div className="gitHub-container icon-container">
            <img src={gitHub} alt="" />
            <p>gitHub</p>
          </div>
        </div>
        <Button variant="light" className='ms-4 my-4 p-1 px-4'>Download CV</Button>
      </div>
    </Container>

  )
}

export default Home;
