import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Reg = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 60px;
    background-color:#fff;
    border:1px solid black;
    border-radius:5px;


;`


const submit = {
    marginLeft:"30%",
    padding:"10px",
    borderRadius:"5px",
    backgroundColor:"black",
    color:"white",
    border:"none"
      
     
  };


const input ={
    padding: "5px",
    margin: "5px 0px",
    width: "100%",
    textAlign:"center",
    color:"gray"

};
const Register = () => {
  return (
    <>
    <Reg>
        <form onSubmit={(e)=> e.preventDefault()}>

            <input 
                style={input} 
                type='text' 
                placeholder='Username'
                required
                // value={username}
                // onChange={(e)=>setusername(e.target.value)}

            /> <br/>

            <input 
                style={input} 
                type='email' 
                required
                placeholder='Email e.g talk@gmail.com'
                // value={email}
                // onChange={(e)=>setemail(e.target.value)}

            /> <br/>

            <input 
                style={input} 
                type="password" 
                placeholder='Password'
                // value={password}
                // onChange={(e)=>setpassword(e.target.value)}
                /> <br/>
          
            <button style={submit} type="submit"> SIGN UP</button> <br/>

        </form>
   
       <p style={{color:"orange"}}>Already have an account? <Link to="/login">Sign in</Link> </p>
    </Reg>
</>

  )
}

export default Register