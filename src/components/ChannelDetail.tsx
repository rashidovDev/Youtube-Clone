import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard} from "./navigate";
import { fetchFromAPI } from "../utils/fetchFromApi";

const ChannelDetail : React.FC = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id }  = useParams()

  console.log("anvar", videos)

  
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: ' linear-gradient(to right, #00b09b, #96c93d)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail