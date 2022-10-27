import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
      <Typography variant="subtitle1" className='detail-link' >Questions? Contact us</Typography>
       <div className='link-list'>
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>

          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Prefences</li>
            <li>Legal Notices</li>
          </ul>

          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>

          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
       </div>

       <Typography variant='subtitle2'  className='detail-link' >FilmFlix Nepal</Typography>
    
    </div>
  )
}

export default Footer