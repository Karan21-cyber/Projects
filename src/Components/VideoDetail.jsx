import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import { fetchData } from '../services/fetchData';

function VideoDetail() {
    const [videoDetail,setVideoDetail] = useState(null);
    
    const {id} = useParams();

    useEffect(()=>{
        fetchData(`video?id=${id}`)
        .then((data) => setVideoDetail(data))
    
    },[id])
    
    if(!videoDetail)
    return "Loading..."
    
    const {title,channelId} = videoDetail;
  return (
    // Here we are playing the videos '
    <Box minHeight="90vh">
    <Stack direction={{xs:'colum',md:'row'}}>
      {/* Playing the clicked videos */}
      <Box flex={1}>
        <Box sx={{width:"100%",position:'sticky',top:'100px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}$ab_channel=${channelId}`} 
            className='react-player' controls
          />
          <Typography color='#fff' variant ="h5" fontWeight="bold" p={2} >
            {title}
          </Typography>
        </Box>
      </Box>

      
    </Stack> 
  </Box>

  )
}

export default VideoDetail