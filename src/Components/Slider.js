import React from 'react'
import slideimage2 from '../assets/images/t-shirt1.jpg';
import slideimage3 from '../assets/images/vintage2.jpg';
import slideimage4 from '../assets/images/t-shirt.jpg';
import slideimage5 from '../assets/images/vintage1.jpg';
import '../assets/css/Slider.css'
import { Button } from '@mui/material';


const Slider = () => {
  return (
    <>
    <div className='slider-cont'>
        {/* <img src={slideimage1} width="100%" height="500px"/> */}
        <div className='first'>
          <div className='desc'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
               aut asperiores expedita et, voluptate maxime dolores.
               dolorum suscipit reiciendis! Accusantium ducimus dolor numquam dolore, error vitae accusamus pariatur modi, impedit esse nobis facilis voluptatum eius, suscipit dignissimos eaque labore non rem alias repellat. Optio sit quo neque commodi esse temporibus debitis tempore enim loribus, a utadipisci itaque voluptatum eius</p>
          
            <Button variant='outlined' color='warning'>BRACE</Button>
          </div>
         

        </div>
        <div className='d-flex'>

          <div className='cont'>
            <img className='img2' src={slideimage2} width="100%" height="300px"/>
            <div class="overlay">
                <div class="text">
                   <p>Mens Fashion</p>
                      <Button variant="contained" color='warning'>MORE</Button>
                  </div> <br/>

            </div>
          </div>


          <div className='cont'>
            <img className='img2' src={slideimage5} width="100%" height="300px"/>
            <div class="overlay">
                <div class="text">
                  <p>Vintage Clothings</p>
                  <Button variant="contained" color='warning'>MORE</Button>

                </div>
            </div>
          </div>

          <div className='cont'>
            <img className='img3' src={slideimage3} width="100%" height="300px"/>
            <div class="overlay">
                <div class="text">
                  <p>Popular Outfits</p>
                  <Button variant="contained" color='warning'>MORE</Button>

                </div>
            </div>
          </div>
               
        </div>
    </div>
  
    </>

  )
}

export default Slider