import { Typography,Button } from '@mui/material'
import React, { useState } from 'react'
import datas from "../services/data"

function Faq({question,answer}) {
    const [show,setShow] = useState(false);

    function handleClick(){
        setShow((prevShow) => !prevShow);
    }

  return (
    <div className="faq-container">
        <Typography 
            onClick={handleClick}
            sx={{backgroundColor:"gray", padding:"10px 10px" ,marginBlock:"2px",fontSize:"20px",cursor:"pointer"}}
            >{question}</Typography>

        {
        show ? 
            <div>
                <Typography 
                    sx={{backgroundColor:"gray", padding:"10px 10px",fontSize:"20px" }}
                >{answer.ans1}</Typography>
                {answer.ans2 && <Typography sx={{backgroundColor:"gray",padding:"10px 10px",fontSize:"20px" }}>{answer.ans2}</Typography>}
            </div > 
            : ""
        }
    </div>

  )
}

export default Faq