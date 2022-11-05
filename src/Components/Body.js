import { SatelliteAlt } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/css/Body.css'
import {arrivalData,offerData } from './ImageData'



const Body = () => {
  return (
    <>
    <h2 className='ms-5'>New Arrivals: Footwears & Hoodies</h2>
    <Container>
    <div className='new-arrivals'>
        {arrivalData.map((data,index)=>{

            return(
        
            <div className="arrival" key={index}>
                <img className='image-fluid' src={data.image}  />
                <div className='desc'>
                    <p>{data.name} <br/> KES {data.price}</p>
                            <Link to={`/view/${data.id}`}><Button variant="contained" color="warning" >View</Button></Link>
                </div>
            </div>     


            )
        })}
    </div>
    </Container>

    <h2 className='special ms-5'>Special Offers</h2>
    <Container>
        <div className='new-arrivals'>
            {offerData.map((data,index)=>{
                return(
            
                    <div className="arrival"  key={index}>
                        <img className='image-fluid' src={data.image}   />
                        <div className='desc'>
                            <p>{data.name} <br/> <strike>KES {data.initialPrice}*</strike> KES {data.price}</p>
                            <Link to={`/view/${data.id}`}><Button variant="contained" color="warning" >View</Button></Link>
                        </div>
                    </div>
        
                )
            })}
        </div>
    </Container>
        

    </>
  )
}

export default Body