import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import VideoList from './pages/VideoList';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
    <Router>
      <div className="container">
    <Header></Header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/video-xo-ga' element={<VideoList />} />
        </Routes>
        <Carousel></Carousel>
      </div>
    <Footer></Footer>
      </div>
    </Router>
    </>
  );
}

export default App;
