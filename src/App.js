import React from 'react'
import {Box} from "@mui/material"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import {Navbar,Home,Feed,SearchFeed,  VideoDetail} from "./Components/index"

function App() {
  return (
    <BrowserRouter>
        <Box>
            
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail /> } />
                <Route path="/search/:searchTerm" element = {<SearchFeed />} />
            </Routes>
            </Box>
        
    </BrowserRouter>
  )
}

export default App