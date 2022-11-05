import React from 'react'
import '../assets/css/Search.css'

const search = {
    marginLeft:"25%",
    padding:"10px",
    textAlign:"center",
    fontSize:"medium",
    border:"4px solid orange",
    borderRadius:"7px",
    color:"black"
}


const Search = () => {
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input style={search} className='w-50' type='text' placeholder='Search for products'/>
        </form>
    </div>
  )
}

export default Search