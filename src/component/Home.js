import React from 'react'
import Grid from './Grid';
import NavBar from './navbar/NavBar';
import Hindi from './Hindi.js';
import Videoplayer from './Videoplayer.js';
import Footer from './Footer.js';
import Newletter from './Newletter.js';
import Name from './Name.js';

const Home = () => {
  return (
    <div>
     
      <Grid/>
      <Name/>
      <Hindi/>
      <Videoplayer/>
      <Newletter/>
      <Footer/>
    </div>
  )
}

export default Home
