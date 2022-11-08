import { ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import '../assets/css/View.css'
import Navigation from '../Components/Navigation';
import slideimage1 from '../assets/images/t-shirt.jpg';




const input ={
  padding: "10px",
  margin: "10px 0px",
  width: "100%",
  textAlign:"center",

};

const submit = {
  marginLeft:"35%",
  padding:"10px 20px",
  borderRadius:"5px",
  color:"white",
  border:"none"
  
}

const cart = {
  borderRadius:"5px",
  color:"white",
  border:"none",

  
}


const View = () => {
  return (
    <>
    <Navigation/>
    <div className='detail-cont'>
      
       
    <img style={{objectFit:"contain"}} src={slideimage1}  height="300"/>
   <div  className="details">
   
        <li>Stock - product.stock</li>
        <li>Price - KES product.price</li>
        <li>Offer - product.description</li>
        <Button id='p' variant="contained" color='warning' >PURCHASE</Button> 
   </div>
 
</div>

<div >
  <div className='intro'>
    <h3>DELIVERY AND RETURNS</h3>
    <p>Choose your location</p>
  </div>

  <div className='address'>

  <form onSubmit={(e)=>e.preventDefaul()}>

  <select style={input} name="location">
    <option value="">Nairobi</option>
    <option value="">Kisumu</option>
    <option value="">Machakos</option>
    <option value="">Eldoret</option>
    <option value="">Mombasa</option>
  </select> <br/>

    <input 
      style={input}
      type="password" 
      placeholder='Phone Number'
      // value={phone}
      // onChange={(e)=>setPhone(e.target.value)}
      /> <br/>

       <Button style={submit} id='sub' variant="contained" color='warning'> submit </Button> <br/>
    </form>
    <small style={{textDecoration:"underline"}}><h6>Returns</h6></small>
    <small>Returns are quick and easier. Just a phone call is enough</small>

    </div>


  </div>

  <Button  id="cart" variant="contained" color='warning' type="submit"> <ShoppingCartCheckoutOutlined/> ADD TO CART </Button> <br/>

</> 
  )
}

export default View