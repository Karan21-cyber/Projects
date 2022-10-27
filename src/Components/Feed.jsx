import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Movies,TopBar} from './'
import {fetchData} from "../services/fetchData"

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])

    useEffect(() => {
        // setting the videos
        fetchData(`search?query=${selectedCategory === "Musics" ? "Musics" : selectedCategory + "movies" }`)
        .then((item) => setVideos(item.data))

    },[selectedCategory])

  return (
   <Stack sx={{display:"flex",flexDirection:"column"}}
    >
        <Box sx={{height:{xs:"6vh",md:"7vh"},overflowX:"auto"}}>
            <TopBar  
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}    
            />
        </Box>
    
        <Box sx={{height:"83vh", overflowY:"auto",overflowX:"hidden",margin:"10px"}}>
            <Movies videos={videos} />
        </Box>
   </Stack>
  )
}

export default Feed