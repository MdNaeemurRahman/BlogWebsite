import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

const WriteButton = () => {
  return (
    <>
      <div className='fixed-bottom'>
        <Link to='/addPost'>
          <MDBBtn
            // className='btn btn-primary d-flex justify-content-center d-md-table mx-auto'

            color='primary'
            outline
            rounded
            style={{
              float: 'right',
              marginRight: 50,
              marginBottom: 50,

              color: 'white',
            }}>
            <MDBIcon
              icon='pencil-alt '
              size='lg'
              style={{ margin: 10, color: 'white' }}></MDBIcon>
            Write Someting
          </MDBBtn>
        </Link>
      </div>
    </>
  );
};

export default WriteButton;
