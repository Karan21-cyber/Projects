import React from 'react'
import {Box, Typography,Button} from "@mui/material"

import netflix from "../images/netflix1.jpg"

import tvimage from "../images/tv.jpg"
import kidImage from "../images/kids.webp"
import mobileImage from "../images/mobile.png"
import {Faq,Footer} from './'
import {data} from "../services/data"
import { Link } from 'react-router-dom'


function Home() {

  return (

    <Box>
      <div style={{opacity:0.4,backgroundColor: "black"}}>
        <img src={netflix} width="100%" height="600px"/>
      </div>
      
      <div className='content'>
          <Typography 
            variant="h3"
            sx={{textAlign:"center"}}
            >
              Unlimited Movies, TV shows, and More.
          </Typography>

          <Typography variant="h5" sx={{textAlign:"center"}} >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography 
            sx={{textAlign:"center"}}>
            Ready to Watch? Enter your email to create or restart your membership.
          </Typography>
          <div className='starter' >
            <input type="text" placeholder='Enter your email' />
           
           
          <Link to="/feed" style={{textDecoration: 'none'}}><Button variant='contained' sx={{backgroundColor:"red"}}>GetStarted</Button> </Link>
          
          </div>
         
      </div>
     
    <div className='container'>
        <div className='info'>
          <div className='info-text'>
            <Typography variant="h4" >
               Enjoy on your TV.
            </Typography>
            <br />
            <Typography variant="h5">
            Watch on Smart TVs, Playstation,Xbox,ChromeCast, Apple TV, Blue-ray players, and More.
            </Typography>
          </div>
          <img src={tvimage} className="images" width="400px" />
        </div>
        
        <hr />
        
        <div className='info'>
          <img src={mobileImage} className="images" width="300px" height="300px" />
          <div className='info-text'>
            <Typography variant="h4">
            Download your shows to watch Offline.
            </Typography>
            <br />
            <Typography variant="h5">
            Save your favorites easily and always have something to watch.
            </Typography>
          </div>
        </div>

        <hr />

        <div className='info'>
          <div className='info-text'>
          <Typography variant="h4">
          Watch everyWhere.
            </Typography>
            <br />
            <Typography variant="h5">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </Typography>
          </div>
          <img src=""  style={{display:"none"}}  className="images" />
          
        </div>

        <hr />

        <div className='info'>
          <img src={kidImage} width="400px" className='images'/>
          <div className='info-text'>
          <Typography variant="h4">
          Create profiles for kids.
            </Typography>
            <br />
            <Typography variant="h5">
            Send kids on adventures with their favorite characters in space made just for them-free with your membership.
            </Typography>
          </div>
         
        </div>

        <hr />

      <div style={{marginBlock:"30px"}}>
        {/* mapping the data and pass as props */}
        { data.map((item) => (
          <Faq key={item.id} question={item.question} answer={item.answer} />
        ))}
          
          <Typography
              mt="25px"
              sx={{textAlign:"center"}}>
              Ready to Watch? Enter your email to create or restart your membership.
            </Typography>
        
          
            <div className='starter' >
              <input type="text" placeholder='Enter your email' />
              <Button variant='contained' sx={{backgroundColor:"red"}}>GetStarted</Button>
            </div>
        </div>    
          <hr />

          <Footer />

    </div>

    </Box>
   

  )
}

export default Home