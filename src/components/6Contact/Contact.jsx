import React from 'react'
import { Container,Button ,Row} from 'react-bootstrap'
import './contact.css'

const Contact = () => {
    return (
        <Container className='bg-dark py-5' fluid id='contact'>
            <div className='contact-container'>
                <div className="contact-container-header">
                    <h1 className='text-center text-light py-5'>Contact <span>Me</span></h1>
                </div>
               
               <div className="contact d-flex justify-content-center form-container">
                    <form className='d-flex flex-column w-50'>
                        <input type="text" className='rounded p-2 border none my-1' placeholder='Your Name' />
                        <input type="Email"className='rounded p-2 border none my-1' placeholder='Your Email' />
                        <textarea cols="10" rows="5" placeholder='Your Message' className='rounded p-2 border none my-1'></textarea>
                        <div className="form-btn d-flex justify-content-center">
                             <Button variant="warning px-5 py-1 ms-2 my-1"  className='button'>submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Contact
