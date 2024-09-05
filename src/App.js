import React from 'react';
import Head from './component/header';
import Special from './component/special';
import Menu from './component/menu';
import About from './component/about';
import Footer from './component/footer';
import LoginPage from './component/login';

import { BrowserRouter as Route, Router } from 'react-router-dom';


import './App.css';


function App() {
  const scrollto=(id)=>{
    const element=document.getElementById(id)
    if (element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }
  const hidelinks=(id)=>{
    const element=document.getElementById(id)
    if ( element.style.display='none'){
      element.style.display='flex'
    }
    else{
      element.style.display='none'
    }
  }
  const hidecard=(id)=>{
    const element=document.getElementById(id)
    if ( element.style.display='none'){
      element.style.display='flex'
    }
    else{
      element.style.display='none'
    }
  }
  
  return (
    <div >
      <Head  scrollto={scrollto} hidelinks={hidelinks}/>
      <Special />
      <Menu hidecard={hidecard}/>
      <About />
      <Footer />
      
    </div>
  );
}

export default App;

