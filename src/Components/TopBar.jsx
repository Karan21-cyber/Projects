import { Stack } from '@mui/material'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { categories } from '../services/data'

function TopBar({selectedCategory,setSelectedCategory}) {
  return (
    <Stack 
        direction="row"
        spacing={2}
        sx={{marginInline:"10px",marginBlock:'10px'}}
        
    >
        { categories.map((category) => (
            <button 
              style={{backgroundColor:category.name === selectedCategory && '#FC1503',color:"white" }} 
              className="category-btn" 
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
                <span>{category.name}</span>
            </button>
        ))
        }
    </Stack>
  )
}

export default TopBar