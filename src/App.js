import { Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from './components'
import Video from "./assets/vinyl_-_spin.mp4"
import { useState } from 'react';

import './App.css';
function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <video className="video-background" src={Video} playsInline autoPlay loop muted></video>
      <Header/>
      <Routes>
        <Route path="/" element={<Main page={page} setPage={setPage}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;