import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import netflix from "../images/netflix1.jpg"
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {auth} from "../firebase"



function SignUp() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setfullName] = useState("");
    const [errormsg, setErrorMsg] = useState("");
    const [repassword, setRePassword] = useState("");

    const navigate = useNavigate();

    const [buttonDisable, setButtonDisable] = useState(false);

    const register = () => {
        // e.preventDefault();
        if(!email || ! password || !fullname || !repassword){
            setErrorMsg('Fill all fields')
            return ;
        }
        if(password !== repassword){
            setErrorMsg("Password doesn't match");
            return ;
        }
        setErrorMsg("");
        
        setButtonDisable(true);
        //  some fancy firebase register things
        createUserWithEmailAndPassword(auth,email,password)
        .then( async (res) => {
            setButtonDisable(false);
            const user = res.user;
            await updateProfile(user,{
                displayName: fullname,
            });

            navigate("/signIn");
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
                Sign Up
            </Typography>

            <input className='user-input' 
                    type="text" 
                    value={fullname} 
                    onChange={ e => setfullName(e.target.value)} 
                    placeholder='Full Name' />
            
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
            
            <input className='user-input' 
                    type="password" 
                    value = {repassword}
                    onChange={ e => setRePassword(e.target.value)} 
                    placeholder='Confirm Password' />
            
            <Box mt="60px" sx={{color:"gray"}}>
                <Typography variant="subtitle2" color="red" >{errormsg}</Typography>

                <Typography variant="subtitle2" >New to Netflix? By signing up, you agree to our <b>Terms. Privacy Policy</b> and <b>Cookies Policy</b></Typography>
                <Typography variant="subtitle2" mt="10px">This page is protected by Google reCAPTCHA to
                      ensure you're not a bot. <Link style={{color:"blue", textDecoration:"none" }}>Learn more.</Link></Typography>
            </Box>

            <Button variant="contained" 
                onClick={register}
                disabled={buttonDisable}
                type="submit"
                sx={{backgroundColor: buttonDisable === false ? "red" : "gray" ,fontWeight:"bold",marginBlock:"20px"}} 
            >
                SignUp
            </Button>

            <Typography sx={{textAlign:"center"}}> Have an account? <Link to="/signIn" style={{textDecoration:"none", color:"blue"}}>SignIn</Link></Typography>
            
        </Box>
    </Box>
  )
}

export default SignUp