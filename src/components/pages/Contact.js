import React from 'react';
import Header from '../Header/Header';
import emailjs from 'emailjs-com';
import bgpic from './images/contact-bg.jpg';

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2ecsulp',
        'template_sg9ek9n',
        e.target,
        'user_bydAhiNCc4IvOe4yORKty'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Header
        bgpic={bgpic}
        heading='Contact With Me'
        subheading='Get in Touch'
      />
      <section className='my-5'>
        <h2 className='h1-responsive font-weight-bold text-center my-5'>
          Contact
        </h2>
        <p className='text-center w-responsive mx-auto pb-5'>
          Hi, Do you have any questions ? Don't hesitate to contact with me.
        </p>
        <MDBRow style={{ textAlign: 'center' }}>
          <MDBCol lg='6' className='lg-0 mb-4'>
            <MDBCard>
              <MDBCardBody>
                <div className='form-header blue accent-1'>
                  <h3 className='mt-2' style={{ color: '#0085a1' }}>
                    <MDBIcon icon='envelope' /> Write Here
                  </h3>
                </div>
                <form onSubmit={sendEmail}>
                  <div className='row pt-5 mx-auto'>
                    <div className='col-8 form-group mx-auto'>
                      <input
                        className='form-control form-control-lg'
                        type='text'
                        // className='form-control'
                        placeholder='Name'
                        name='name'
                        required
                      />
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                      <input
                        className='form-control form-control-lg'
                        type='email'
                        // className='form-control'
                        placeholder='Email Address'
                        name='email'
                        required
                      />
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        // className='form-control'
                        placeholder='Subject'
                        name='subject'
                        required
                      />
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                      <textarea
                        className='form-control form-control-lg'
                        // className='form-control'
                        id=''
                        cols='30'
                        rows='6'
                        placeholder='Your message'
                        name='message'
                        required></textarea>
                    </div>
                    <div className='col-8 pt-3 mx-auto'>
                      <MDBBtn
                        outline
                        type='submit'
                        color='primary'
                        style={{ color: 'white' }}>
                        Send
                        <MDBIcon far icon='paper-plane' className='ml-1' />
                      </MDBBtn>
                    </div>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg='6'>
            <MDBCard>
              <div
                id='map-container'
                className='rounded z-depth-1-half container '
                style={{ height: '400px' }}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15306.031581479294!2d107.56235035!3d16.449800649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1613322418441!5m2!1sen!2s'
                  title='My Location'
                  width='95%'
                  height='100%'
                  frameBorder='0'
                  style={{ border: 0 }}
                />
              </div>
              <br />
              <MDBRow
              // className='row pt-5 mx-auto'
              //  className='text-center'
              >
                <MDBCol md='4'>
                  <MDBBtn
                    size='md'
                    tag='a'
                    color='blue'
                    className='accent-1'
                    style={{ color: 'blue' }}>
                    <MDBIcon icon='map-marker-alt' />
                  </MDBBtn>
                  <p>Thua Thien Hue</p>
                  <p className='mb-md-0'>VietNam</p>
                </MDBCol>
                <MDBCol md='3'>
                  <MDBBtn
                    size='md'
                    tag='a'
                    color='blue'
                    className='accent-1'
                    style={{ color: 'blue' }}>
                    <MDBIcon icon='phone' />
                  </MDBBtn>
                  <p>+ 84 775574537</p>
                  <p className='mb-md-0' style={{ fontSize: 20 }}>
                    Mon-Fri, 8:00-22:00
                  </p>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBBtn
                    size='md'
                    tag='a'
                    color='blue'
                    className='accent-1'
                    style={{ color: 'blue' }}>
                    <MDBIcon icon='envelope' />
                  </MDBBtn>
                  <p>naeemur21@gmail.com</p>
                  <p className='mb-md-0' style={{ textAlign: 'center' }}>
                    naeemur.m.rahman@utu.fi
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </>
  );
};

export default Contact;
