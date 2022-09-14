import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/data";

const VideoCard  = ({ video: { id: { videoId }, snippet } }) => {

  const d = new Date();
  const currentDate = d.getDate() 
  const currentMonth = d.getMonth()
  const currentYear = d.getFullYear()

  let publishDate = snippet?.publishTime.slice(8,10);
  let publishMonth = snippet?.publishTime.slice(5,7);
  let publishYear = snippet?.publishTime.slice(0,4);

  let dayDifference = currentDate - publishDate;
  let monthDifference = currentMonth - publishMonth
  let yearDifference = currentYear - publishYear;

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "300px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{display:"block"}}>
        <Typography variant="caption" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="caption" color="gray">
          {
          yearDifference > 0 ? `${yearDifference} years ago` 
          : monthDifference > 0 ? `${monthDifference} months ago`
          : dayDifference > 0 ? `${dayDifference} days ago` : "Today"
          }
        </Typography>
      </Link>
    </CardContent>
  </Card>
  )
}

export default VideoCard