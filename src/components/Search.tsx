import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {ISearch} from "../typescript/typescript"

const Search : React.FC = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if(searchTerm) {
      navigate(`/search/${searchTerm}`); 
    }
  }

  return (
    <Paper
    className='paper'
    component = "form"
    onSubmit = {handleSubmit}
    sx = {{
        background: "#222",
        border : "1px solid #434343",
        pl : 2,
        boxShadow : "none",
        mr : { sm : 5}
    }}
    >
        <input
         style={{ background: "#222",color:"#fff",fontSize:"16px"}}
         type="text" 
         className="search-bar"
         placeholder='Search...'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
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