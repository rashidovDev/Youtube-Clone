import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/data";

const VideoCard : React.FC <any> = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div>
        <Card>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            </Link>
        </Card>
    </div>
  )
}

export default VideoCard