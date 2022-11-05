import { Box, Button, Typography } from '@mui/material'
import { signInWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import netflix from "../images/netflix1.jpg"


function SignIn() {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const [buttonDisable, setButtonDisable] = useState(false);

    const login = () => {
        // e.preventDefault();
        if(!email || ! password){
            setErrorMsg('Fill all fields')
            return ;
        }
        setErrorMsg("");
        
        setButtonDisable(true);
        //  some fancy firebase register things
        signInWithEmailAndPassword(auth,email,password)
        .then(async(res) => {
            setButtonDisable(false);
            navigate("/");
        })
        .catch((err) => {
            setButtonDisable(false);
            setErrorMsg(err.message);
        })
        
    }
  return (
    <Box 
        sx={{height:"90vh",backgroundImage:`url(${netflix})`,opacity:"0.7"}}
    >
        <Box
            className="signin-box"
        >
            <Typography variant='h4' 
                   mb="10px"
            >
                Sign In
            </Typography>

            <input className="user-input" 
                    type="email" 
                    value={email} 
                    onChange={ e => setEmail(e.target.value)} 
                    placeholder='Email and PhoneNumber' />

            <input className='user-input' 
                    type="password" 
                    value={password} 
                    onChange={ e => setPassword(e.target.value)} 
                    placeholder='Password' />

            <Typography variant="subtitle2" color="red" >{errormsg}</Typography>
            
            <Button variant="contained" 
                    disable = {buttonDisable}
                    sx={{backgroundColor: buttonDisable === false ? "red" : "gray",fontWeight:"bold",marginBlock:"20px"}}
                    onClick = {login}    
                >
                SignIn
            </Button>
            <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
                <div>
                    <input type="checkbox" />
                    <label>{" "}Remember me</label>
                </div>
                <label><Link style={{color:"white",textDecoration:"none"}} >Need help?</Link></label>
            </Box>
            
            <Box mt="60px" sx={{color:"gray"}}>
                <Typography>New to Netflix? <Link to="/signUp" style={{color:"white",textDecoration:"none"}}>Sign up now</Link></Typography>
                <Typography variant="subtitle2" mt="10px">This page is protected by Google reCAPTCHA to
                      ensure you're not a bot. <Link style={{color:"blue", textDecoration:"none" }}>Learn more.</Link></Typography>
            </Box>

        </Box>
    </Box>
  )
}

export default SignIn