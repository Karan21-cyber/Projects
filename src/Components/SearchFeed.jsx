import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../services/fetchData';
import Movies from './Movies';

function SearchFeed() {

  const [videos, setVideos] = useState([])

  const {searchTerm} = useParams();

  useEffect(() => {
    fetchData(`search?query=${searchTerm}`)
    .then((item) => setVideos(item.data))

  },[searchTerm]);
  console.log(videos);
  return (
    <Box
      p={2}
      sx={{overflowY:'auto',
          height:"90vh",
          flex:2  
      }}
    >
      <Typography varient="h4" fontWeight="bold" mb={2}
        sx={{color:'white'}}>
          Search Results for: <span style={{color:"#F31503"}}>{searchTerm} </span> videos
      </Typography>

      <Box
        sx={{display:'flex',p:"2" }}
      >
        <Box sx={{mr:{sm:'100px'}}} />
        <Movies videos={videos} />
      </Box>
    
    </Box>
  )
}

export default SearchFeed