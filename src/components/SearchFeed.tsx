import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "./navigate";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
 
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        
       <Videos videos={videos} />
      
      </Box>
    </Box>
  );
};

export default SearchFeed;