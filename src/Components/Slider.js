import React from 'react'
import slideimage1 from '../assets/images/hoodie1.jpg';
import slideimage2 from '../assets/images/t-shirt1.jpg';
import slideimage3 from '../assets/images/hoodie2.jpg';
import slideimage4 from '../assets/images/t-shirt.jpg';
import '../assets/css/Slider.css'

const Slider = () => {
  return (
    <>
    <div className='slider-cont mt-5'>
        <img src={slideimage1} width="100%" height="500px"/>
        <div className='d-flex'>
            <img src={slideimage2} width="100%" height="300px"/>
            <img src={slideimage3} width="100%" height="300px"/>
            <img src={slideimage4} width="100%" height="300px"/>    
        </div>
    </div>
  
    </>

  )
}

export default Slider