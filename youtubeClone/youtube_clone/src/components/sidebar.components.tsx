import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

type sideBarProps={
    selectedCategory: string,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}
const SideBar = ({selectedCategory, setSelectedCategory}: sideBarProps) => {
    
  return (
    <Stack
        direction='row'
        sx={{
            flexDirection:{md: 'column'},
            height:{sx: 'auto', md: '95%'},
            overflowY:'auto',
            mt: '60px',
            zIndex: '-2'
        }}
        
    >
        {
            categories.map((category)=>(
               <button
                className="category-btn" 
                onClick={()=> setSelectedCategory(category.name)}

                style={{
                    background: category.name === selectedCategory ? '#FC1503' : '',
                    color: 'white'
                }}
                key={category.name}
               >
                    <span
                     style={{
                        color: category.name === selectedCategory ? 'white' : 'red',
                        marginRight: '15px'
                     }}
                    >{category.icon}</span>
                    <span
                     style={{
                        opacity: category.name === selectedCategory ? '1' : '0.8'
                     }}
                    >{category.name}</span>
               </button> 
            ))
        }
    </Stack>
  )
}

export default SideBar;