import React from 'react'
import slideimage1 from '../assets/images/hoodie1.jpg';
import slideimage2 from '../assets/images/t-shirt1.jpg';
import slideimage3 from '../assets/images/hoodie2.jpg';
import slideimage4 from '../assets/images/t-shirt.jpg';
import '../assets/css/Slider.css'
import { Button } from '@mui/material';


const Slider = () => {
  return (
    <>
    <div className='slider-cont'>
        {/* <img src={slideimage1} width="100%" height="500px"/> */}
        <div className='first'>
          <div className='desc'>
            <h2>GET THE BEST OFFERS AT OUR NEAREST STORE</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              aut asperiores expedita et, voluptate maxime dolores.
              Unde accusamus optio quis nam tempora quae perspiciatis, 
              nihil hic sed ipsa obcaecati, numquam animi eum 
               dolorum suscipit reiciendis! Accusantium ducimus dolor numquam dolore, error vitae accusamus pariatur modi, impedit esse nobis facilis voluptatum eius, suscipit dignissimos eaque labore non rem alias repellat. Optio sit quo neque commodi esse temporibus debitis tempore enim loribus, a utadipisci itaque voluptatum eius</p>
            <ul>
              <li>Footwears</li>
              <li>Handbags</li>
              <li>Trousers ...</li>
            </ul>
            <Button variant='outlined' color='warning'>BRACE</Button>
          </div>
         

        </div>
        <div className='d-flex'>
            <img className='img1' src={slideimage2} width="100%" height="300px"/>
            <img className='img2' src={slideimage3} width="100%" height="300px"/>
            <img className='img3' src={slideimage4} width="100%" height="300px"/>    
        </div>
    </div>
  
    </>

  )
}

export default Slider