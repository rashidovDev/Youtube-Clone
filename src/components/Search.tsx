import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
  return (
    <Paper
    component = "form"
    onSubmit = {() => {}}
    sx = {{
        background: "#121212",
        border : "1px solid #373737",
        pl : 2,
        boxShadow : "none",
        mr : { sm : 5}
    }}
    >
        <input
         style={{ background: "#121212",color :"#fff",fontSize:"16px"}}
         type="text" 
         className="search-bar"
         placeholder='Search...'
         value=""
         onChange={() => {}}
         />
         <IconButton 
         type="submit"
         sx={{ 
            p : "10px",
            color : "#fff"
         }}
         >
          <SearchIcon/>
         </IconButton>
    </Paper>
  )
}

export default Search