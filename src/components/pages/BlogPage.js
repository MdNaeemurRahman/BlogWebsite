import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
} from 'mdbreact';
import Header from '../Header/Header';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bgpic from './images/blogbanner-1588070075639.png';
import './BlogPage.css';

const BlogPage = () => {
  const [post, setPost] = useState({
    title: '',
    img: '',
    body: '',
  });

  const { id } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      const result = await axios.get(`http://localhost:3001/post/${id}`);
      setPost(result.data);
    };
    loadPost();
  }, [id]);

  // const loadPost = async () => {
  //   const result = await axios.get(`http://localhost:3001/post/${id}`);
  //   setPost(result.data);
  // };

  var today = new Date();
  const date =
    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

  return (
    <>
      <Header heading={post.title} bgpic={bgpic} />
      <MDBCard className='my-5 px-5 pb-5'>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='12'>
              <MDBCard reverse>
                <MDBView hover cascade waves className='text-center'>
                  <div className='polaroid'>
                    <img
                      src={post.img}
                      alt=''
                      className='img-fluid'
                      style={{ width: '80%' }}
                    />
                  </div>

                  <MDBMask overlay='white-slight' className='waves-light' />
                </MDBView>
                <MDBCardBody cascade className='text-center'>
                  <h2 className='font-weight-bold'>
                    <a href='#!'>{post.title}</a>
                  </h2>
                  <p>
                    Written by{' '}
                    <a
                      target='_blank'
                      href='https://www.facebook.com/naimur.neloy'
                      rel='noreferrer'>
                      <strong style={{ color: 'blue', textDecoration: 'bold' }}>
                        Naeemur Rahman
                      </strong>
                    </a>
                    , {date}
                  </p>
                  <a
                    href='https://www.facebook.com/naimur.neloy'
                    target='_blank'
                    rel='noreferrer'>
                    <span className='fa-stack fa-sm'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fab fa-facebook-f fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                  <a
                    href='https://github.com/MdNaeemurRahman'
                    target='_blank'
                    rel='noreferrer'>
                    <span className='fa-stack fa-sm'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fab fa-github fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                </MDBCardBody>
              </MDBCard>
              <MDBContainer className='mt-5'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.body,
                  }}>
                  {/* {post.body} */}
                </p>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
          <hr className='mb-5 mt-4' />
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default BlogPage;
