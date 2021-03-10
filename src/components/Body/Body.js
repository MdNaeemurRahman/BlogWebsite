import React, { useState, useEffect } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Body = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get('http://localhost:3001/post');
    setPost(result.data);
    // .reverse()
  };

  const deletePost = async (id) => {
    if (
      window.confirm(`Are you Sure you want to delete? \n
       `)
    )
      await axios.delete(`http://localhost:3001/post/${id}`);
    loadData();
  };

  var current = new Date();

  return (
    <MDBCard className='my-5 px-5 pb-5'>
      <MDBCardBody>
        <h2 className='h1-responsive font-weight-bold text-center my-5'>
          Recent posts
        </h2>

        <hr />
        {/* <p className='text-center w-responsive mx-auto mb-5'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p> */}
        {posts.map((post, index) => (
          <div key={index}>
            <MDBRow>
              <MDBCol lg='5' xl='4'>
                <MDBView hover className='rounded z-depth-1-half mb-lg-0 mb-4'>
                  <img className='img-fluid' src={post.img} alt='' />
                  <a href='#!'>
                    <MDBMask overlay='white-slight' />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg='7' xl='8'>
                <h3 className='font-weight-bold mb-3 p-0'>
                  <strong>{post.title}</strong>
                </h3>
                <p
                  className='dark-grey-text'
                  dangerouslySetInnerHTML={{
                    __html: post.body.substring(0, 170),
                  }}>
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: post.body.substring(0, 170),
                    }}></div> */}
                  {/* {post.body.substring(0, 170)} */}
                </p>
                <div>
                  by{' '}
                  <Link to='/about' className='font-weight-bold'>
                    Naeemur Rahman
                  </Link>
                  , {current.toLocaleString()}
                  <MDBBtn>
                    <Link
                      className='fas fa-edit'
                      size='lg'
                      style={{ color: 'blue' }}
                      to={`/editPost/${post.id}`}></Link>
                  </MDBBtn>
                  <MDBBtn>
                    <i
                      className='fas fa-trash-alt'
                      size='lg'
                      style={{ color: 'red' }}
                      onClick={() => deletePost(post.id)}></i>
                  </MDBBtn>
                </div>
                <Link to={`/blogPage/${post.id}`}>
                  <MDBBtn color='primary' size='md'>
                    Read More
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>
            <hr className='my-5' />
          </div>
        ))}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Body;
