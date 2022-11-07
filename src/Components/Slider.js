import React from 'react'
import '../assets/css/Slider.css'
import { Button } from '@mui/material';
import { SlideData } from './ImageData';
import slideimage1 from '../assets/images/t-shirt.jpg';



const Slider = () => {
  return (
    <>
    <div className='slider-cont'>
        {/* <img src={slideimage1} width="100%" height="500px"/> */}
        <div className='first'>
          <div className='desc'>
            <p>Conventi</p>
          
            <Button variant='outlined' color='warning'>SHop Now at Shopify</Button>
          </div>
         

        </div>
        <div className='d-flex'>
         
           { SlideData.map((data, index)=>{
              return(
                <div className='cont'>
                    <img className='img2' src={data.image} width="100%" height="300px"/>
                    <div class="overlay">
                      <div class="text">
                        <p style={{fontSize:"medium"}}>{data.description}</p>
                        <Button variant="contained" color='warning'>MORE</Button>
                      </div>
                    </div>
                </div>
              

              )
            })
          }

               
        </div>
    </div>
  
    </>

  )
}

export default Slider