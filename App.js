import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from './components/pages/Home';
import Explore from './components/Explore';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Destinationfind from './components/Destinationfind';
import Result from './components/Result';
import Slider from './components/Slider/icons/Slider';
import Final from './components/Final.js';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/sign-up' element={<Register/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/Destinationfind' element={<Destinationfind/>}/>
        <Route path='/Result' element={<Result/>}/>
        <Route path='/Final' element={<Final/>}/>

        
        
      </Routes>
    </Router>
  
    </>
  
  );
}

export default App;
