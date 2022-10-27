import { Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'

function Movies({videos}) {

  return (
    <Stack
      direction="row" 
      flexWrap="wrap"
      justifyContent="center"
      gap={2}

    >

      {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
    
    </Stack>
  )
}

export default Movies