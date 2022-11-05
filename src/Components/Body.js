import React from 'react'
import arrival1 from '../assets/images/footwear.jpg';
import arrival2 from '../assets/images/shoes1.jpg';
import arrival3 from '../assets/images/hoodie.jpg';
import arrival4 from '../assets/images/hoodie2-remove.png';
import '../assets/css/Body.css'


const Body = () => {
  return (
    <>
    <h2>New Arrivals:Sweatpants & Hoodies</h2>
    <div className='new-arrivals'>
        <img src={arrival1} width="250px" height="300px"/>
        <img src={arrival2} width="250px" height="300px"/>
        <img src={arrival3} width="250px" height="300px"/>
        <img src={arrival4} width="250px" height="300px"/>


    </div>

    </>
  )
}

export default Body