// This Code is not used in the project , It's s test  code

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBIcon } from 'mdbreact';

const WriteButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='fixed-bottom'>
        <MDBBtn
          color='primary'
          outline
          rounded
          onClick={handleShow}
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
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className='h2 text-center mb-4' style={{ marginLeft: 160 }}>
              Write Post
            </p>
          </Modal.Title>
        </Modal.Header>

        <FormPag />

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>Post</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WriteButton;
