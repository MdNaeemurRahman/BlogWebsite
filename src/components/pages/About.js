import React from 'react';
import bgpic from './images/about-bg.jpg';
import Header from '../Header/Header';
import './about.css';
import myPic from './images/my-pic.jpg';
import hp from './images/hp.jpg.png';

const About = () => {
  return (
    <>
      <Header bgpic={bgpic} heading='About Me' subheading='This is what I do' />
      <main id='main'>
        {/* <!-- ======= About Section ======= --> */}
        <section id='about' className='about'>
          <div className='container' data-aos='fade-up'>
            <div className='row'>
              <div className='col-lg-4'>
                <img src={myPic} className='img-fluid' alt='' />
              </div>
              <div className='col-lg-8 pt-4 pt-lg-0 content'>
                <h3>MD Naeemur Rahman</h3>
                <p className='font-italic'>
                  I'm a student of Computer Science majoring in CyberSecurity
                  and Data Science.
                </p>
                <div className='row'>
                  <div className='col-lg-6'>
                    <ul>
                      <li>
                        <i className='bi bi-rounded-right'></i>{' '}
                        <strong>Website:</strong> www.example.com
                      </li>

                      <li>
                        <i className='bi bi-rounded-right'></i>{' '}
                        <strong>City:</strong> City : Rajshahi, Bangladesh
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      <li>
                        <i className='bi bi-rounded-right'></i>{' '}
                        <strong>Degree:</strong> Bachelor
                      </li>

                      <li>
                        <i className='bi bi-rounded-right'></i>{' '}
                        <strong>Freelance:</strong> Available
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  All my life, I have had a fascination and interest in
                  computing and technology. I have always enjoyed keeping
                  up-to-date with the latest advances in technology and have
                  remained amazed at the speed of computerised developments over
                  the past few years...
                </p>
                <p>
                  <img src={hp} alt=''></img>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Skills Section ======= --> */}

        <section style={{ marginTop: 40 }}>
          <div className='container' data-aos='fade-up'>
            <h2 className='title-s' style={{ textAlign: 'center' }}>
              SKILLS
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              libero, repellendus accusamus dicta exercitationem officia iusto
              laudantium voluptatum cumque ipsum at dignissimos fugit! Ex neque
              molestiae illo pariatur odio. Fugiat?
            </p>
            <span>HTML</span> <span className='pull-right'>85%</span>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ flex: 0.85 }}
                aria-valuenow='85'
                aria-valuemin='0'
                aria-valuemax='100'></div>
            </div>
            <span>CSS3</span> <span className='pull-right'>75%</span>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ flex: 0.75 }}
                aria-valuenow='75'
                aria-valuemin='0'
                aria-valuemax='100'></div>
            </div>
            <span>Python</span> <span className='pull-right'>50%</span>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ flex: 0.5 }}
                aria-valuenow='50'
                aria-valuemin='0'
                aria-valuemax='100'></div>
            </div>
            <span>JAVASCRIPT</span> <span className='pull-right'>70%</span>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ flex: 0.7 }}
                aria-valuenow='90'
                aria-valuemin='0'
                aria-valuemax='100'></div>
            </div>
            <span>JAVA</span> <span className='pull-right'>60%</span>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ flex: 0.6 }}
                aria-valuenow='90'
                aria-valuemin='0'
                aria-valuemax='100'></div>
            </div>
            <span>React Js</span>{' '}
            <span className='pull-right' style={{}}>
              70%
            </span>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ flex: 0.7 }}
                aria-valuenow='90'
                aria-valuemin='0'
                aria-valuemax='100'></div>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
};

export default About;
