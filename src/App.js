import React, { useEffect, useState } from 'react'
import {Box} from "@mui/material"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import {Navbar,Home,Feed,SearchFeed,  VideoDetail, SignIn, SignUp} from "./Components/index"
import {auth} from "./firebase";

function App() {

  const [userName, setUserName] = useState("");
  const [isAuthenticate, setIsAuthenticate] = useState(false);
 
  useEffect(() =>{
  auth.onAuthStateChanged((user) => {
    if(user){
      setUserName(user.displayName)
      setIsAuthenticate(true);
    }
    else{
      setUserName("");
    }
  })
 },[userName]);

  return (
    <BrowserRouter>
        <Box>
            
            <Navbar isAuthenticate= {isAuthenticate}
                    userName = {userName}
                    setIsAuthenticate = {setIsAuthenticate}
              />
            
            <Routes>
                <Route path="/" element={isAuthenticate ? <Feed /> : <Home/>} />
                <Route path="/signUp" element = {<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail /> } />
                <Route path="/search/:searchTerm" element = {<SearchFeed />} />
            </Routes>
            </Box>
        
    </BrowserRouter>
  )
}

export default App