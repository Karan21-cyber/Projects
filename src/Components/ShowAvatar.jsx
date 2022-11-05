import React, { useState } from 'react'
import {Typography,Avatar, Popover} from "@mui/material"
import SearchBar from './SearchBar'
import {useNavigate} from 'react-router-dom'
import { deepPurple } from '@mui/material/colors';
import { auth } from '../firebase';
import {signOut} from "firebase/auth"

function ShowAvatar({userName,setIsAuthenticate}){
  const [anchorEl,setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  }
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const logOut = () => {
   
    signOut(auth)
    .then(() => {
      // Sign-out successful
      setIsAuthenticate(false);
      navigate("/");
    })
    .catch((error) =>{
      // An error happened
    })
  }


  return (
  <div>
     <Avatar sx={{ bgcolor: deepPurple[500] }}
                  arial-describedby = {id}
                  onClick = {handleClick}
          />

          <Popover
            id = {id}
            open = {open}
            anchorEl={anchorEl}
            onClose = {handleClose}
            anchorOrigin = {{
              vertical : 'bottom',
              horizontal : 'right'
            }}
            transformOrigin= {{
              vertical : 'top',
              horizontal : 'right',
            }}
          >
            <div style={{width:"120px", padding:"12px", display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
              <Typography>Welome: {userName}</Typography>
              <Typography
                variant="contained"
                sx={{cursor:"pointer", color:"red",fontWeight:800 , paddingTop:"5px"}}
                onClick = {logOut}
              >SignOut</Typography>
            </div>
            

          </Popover>
  </div>
  )
}
export default ShowAvatar