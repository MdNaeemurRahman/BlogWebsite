import './App.css';
import React from 'react';
import './vendor/fontawesome-free/css/all.min.css';

import Navigation from './components/Navigation/Navigation';

import Footer from './components/Footer/Footer';
import WriteButton from './components/WriteButton/WriteButton';

import Home from './components/pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import BlogPage from './components/pages/BlogPage';
import AddPost from './components/users/AddPost';
import EditPost from './components/users/EditPost';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/addPost' component={AddPost} />
          <Route exact path='/editPost/:id' component={EditPost} />
          <Route exact path='/blogPage/:id' component={BlogPage} />
        </Switch>

        <WriteButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
