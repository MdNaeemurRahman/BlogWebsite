import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';

import bgpic from './images/home-bg.jpg';

// const bgpic ='https://image.freepik.com/free-photo/close-up-view-study-table-with-digital-tablet-books-stationery-mug-decoration-living-room_67155-10505.jpg';

const Home = () => {
  return (
    <div>
      <Header
        bgpic={bgpic}
        heading='Himu Blog'
        subheading='A Personal Blogging Page'
      />
      <Body />
    </div>
  );
};

export default Home;
