import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import VideoList from './pages/VideoList';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <>
    <Router>
    <div className="App">
    <Header></Header>
        <main className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/video-xo-ga' element={<VideoList />} />
            {/* temporary */}
            <Route path='/videos/:id' element={<VideoDetail />}></Route>
          </Routes>
        </main>
    <Footer></Footer>
    </div>
    </Router>
    </>
  );
}

export default App;
