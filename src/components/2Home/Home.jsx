import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './Home.css';
import linkedIn from './linkedin.png'
import gitHub from './github.png'
import resume from './PraveenDurairaj.pdf'




const Home = () => {
  return (

    <Container fluid className='bg-dark text-light py-5 ' id='Home'>
      <div className='home-container py-5'>
        <p className='pt-5 ps-4 fs-3'>Hello</p>
        <h1 className='ps-4 display-1'>I'm <span>Praveen</span></h1>
        <h1 className='ps-4 display-1' >React Developer</h1>
        <p className='ps-4 my-3'>As a React Developer. I Spaclallze In Bullding
          Interactive and responsive user interfaces using the React libray</p>
        <div className="intro-icons-container ps-4 my-3 mt-2">
          <div className="linkedIn-container icon-container">
            <a href="https://www.linkedin.com/in/praveendurairaj15/"><img src={linkedIn}/></a>
            <p>LinkedIn</p>
          </div>
          <div className="gitHub-container icon-container">
            <a href="https://github.com/PraveeDurairaj"><img src={gitHub}/></a>
            <p>gitHub</p>
          </div>
        </div>
       <a href={resume} download={true}> <Button variant="light" className='ms-4 my-4 p-1 px-4' >Download CV</Button></a>
      </div>
    </Container>

  )
}

export default Home;
