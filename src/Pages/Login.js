import { ArrowBack, FacebookRounded, Instagram } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';



const log = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "60px",
    backgroundColor:"#fff",
    border:"1px solid black",
    borderRadius:"4px"


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
    color:"white",
    border:"none",
    backgroundColor:"black",

    
}


const or= {
  color:"orange",
  textAlign:"center"
  
};

const submit = {
  marginLeft:"30%",
  padding:"10px",
  borderRadius:"5px",
  backgroundColor:"black",
  color:"white",
  border:"none"
    
   
};

const ig ={
    width: "100%",
    padding:"10px",
    backgroundColor:"black",
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
                    type="email" 
                    placeholder='Email e.g talk@gmail.com'
                    required
                    // value={email}
                    // onChange={(e)=>setemail(e.target.value)}
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