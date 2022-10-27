import { Card,CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { demoVideoUrl } from '../services/data';

function VideoCard({video}) {
  const videoId = video.videoId;
  return (
    <Card sx={{width:{ xs:'100%',sm:'358px', md:'320px'},boxShadow:"none",borderRadius:0.5,backgroundColor:"black"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} 
        style={{textDecoration:"none",color:"black"}}
      >
        <CardMedia
          image={video.thumbnail[0].url}
          alt = {video.thumbnail[0].url}
          sx={{width:{ xs:'100%',sm:'358px', md:'320px'},height:"180px"}}
        />
       <div style={{textAlign:"right",backgroundColor:"black",color:"white",paddingRight:"10px"}}>{video.lengthText}</div>
        <CardContent sx={{backgroundColor:"black",color:"white"}}>
          <Typography variant='subtitle2' >
            {/* videoTitle */}
            {video.title}
          </Typography>
        </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard