import React from 'react';
import '../App.css';
import Mountain from '../videos/video-3.mp4';

export default function Services() {
  return (
    <div>
       <video src={Mountain} autoPlay loop  muted type="video/mp4"/>
            <h1 className='services'>Services</h1> 
    </div>
  );
}