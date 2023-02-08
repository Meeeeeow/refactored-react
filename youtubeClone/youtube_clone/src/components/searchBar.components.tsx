import React from 'react'
import { IconButton, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit={()=>{}}
        sx={{
           borderRadius: 20,
           border: '1px solid #e3e3e3',
           pl: 2,
           boxShadow: 'none',
           mr: 5
        }}
    >
        <input
            className="search-bar"
            placeholder="Search something..."
            value=""
            onChange={()=>{}}
        />
        <IconButton
            type="submit"
            sx={{
                p: '10px',
                color: 'red'
            }}
        >
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;