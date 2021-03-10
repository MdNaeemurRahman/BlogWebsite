import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Header from '../Header/Header';
import bgpic from './a215_1_cover_image.jpg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddPost = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: '',
    img: '',
    body: '',
  });

  const { title, img, body } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/post', user);
    history.push('/');
  };

  return (
    <>
      <Header
        heading='Write A Post'
        subheading='Share Your Thoughts'
        bgpic={bgpic}
      />
      <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Your Blog</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                required
                className='form-control form-control-lg'
                placeholder='Title'
                name='title'
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                required
                className='form-control form-control-lg'
                placeholder='Image Address'
                name='img'
                value={img}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* <div className='form-group'>
              <textarea
                placeholder='Message'
                name='body'
                value={body}
                className='form-control form-control-lg'
                id='exampleFormControlTextarea1'
                rows='6'
                onChange={(e) => onInputChange(e)}></textarea>
            </div> */}

            <div className='form-group'>
              <CKEditor
                name='body'
                data={body}
                editor={ClassicEditor}
                onChange={(e, editor) => {
                  const data = editor.getData();

                  setUser({
                    ...user,
                    body: data,
                  });
                }}></CKEditor>
            </div>

            <div style={{ alignItems: 'center' }}>
              <button className='btn btn-primary ' style={{ marginRight: 40 }}>
                Post
              </button>
              <Link to='/'>
                <button className='btn btn-primary'>Close</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
