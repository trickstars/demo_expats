import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import VideoList from './pages/VideoList';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Header></Header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/video-xo-ga' element={<VideoList />} />
        </Routes>
      </div>
    <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
