import React from 'react'
import {Box,Typography,Button} from "@mui/material"
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-bar'>
      <Box pt={2} 
        sx={{display:"flex",
            flexDirection:"row",
            justifyContent:'space-between',
            paddingBlock:"15px",
            height:"50px",
            paddingInline:{sm:"10px",md:"20px",xs:"5px"},
            backgroundImage:"linear-gradient(black,rgb(44, 43, 59))"
            }}
        >
          <Link to="/" style={{textDecoration:"none"}}>
            <Typography
              sx={{color:"white",fontSize:{sm:"30px",xs:"25px"}}}
            >
                Flim<i style={{color:"red"}}>Flex</i>
            </Typography>
          </Link>
        <Box sx={{display:"flex",flexDirection:"row"}} >
          {/* After login put avtar and search bar*/}
          <SearchBar />
          <Button
            variant="contained"
            sx={{backgroundColor:"red",height:"40px", fontWeight:800 }}
          >SignIn</Button>
        </Box>
    
      </Box>
    </div>
  )
}

export default Navbar