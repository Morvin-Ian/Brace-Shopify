import { ArrowBack, FacebookRounded, Instagram } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';



const log = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "60px",
    border:"1px solid black",
    borderRadius:"4px",
    backgroundColor:"black"


}





const input ={
    padding: "5px",
    margin: "5px 0px",
    width: "100%",
    textAlign:"center",
    color:"gray"

};
const fb = {
    width: "100%",
    padding:"10px",
    borderRadius:"5px",
    backgroundColor: "rgb(16, 16, 39)",
    color:"white",
    border:"none"
    
}


const or= {
  color:"wheat",
  textAlign:"center"
  
};

const submit = {
  marginLeft:"35%",
  padding:"10px",
  borderRadius:"5px",
  backgroundColor: "rgb(16, 16, 39)",
  color:"white",
  border:"none"
    
   
};

const ig ={
    width: "100%",
    padding:"10px",
    backgroundColor:"rgb(16, 16, 39)",
    color:"white",
    border:"none",
    borderRadius:"5px",
 
};





const Login = () => {
  return ( 
    <>
        <div style={log}>
            <form onSubmit={(e)=>e.preventDefault()}>

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
                type="password" 
                placeholder='Password'
                // value={password}
                // onChange={(e)=>setpassword(e.target.value)}
                /> <br/>
            
                <button style={submit} type="submit"> LOG IN</button> <br/>

                <p style={or}>  or </p>

                <button style={fb}>< FacebookRounded/>  Login with Facebook</button> <br/> <br/>
                <button style={ig}> <Instagram/>  Login with Instagram</button> <br/>

            </form> <br/>
        <p style={{color:"orange"}}>Don't have an account? <Link to="/sign-up">Sign up</Link> </p>
        </div>
    </>
   
  )
}

export default Login