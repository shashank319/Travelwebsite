import React from 'react';
import '../App.css';
import Map from '../videos/video-1.mp4';

export default function Products() {
  return (
    <div>
       <video src={Map} autoPlay loop  muted type="video/mp4"/>
            <h1 className='products'>PRODUCTS</h1> 
    </div>
  );
}