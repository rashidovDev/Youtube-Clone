import {Stack, Box} from "@mui/material";
import {ChannelCard, VideoCard} from "../components/navigate"

interface IState {
  videos : {
    id : {
      kind : string | null,
      videoId : string | null
    }
    kind : string | null
    snippet : {
      channelId : string | null
      channelTitle : string | null
      description : string | null
      liveBroadcastContent : string | null
      publishTime : string | null
      publishedAt : string | null
      thumbnails : {
        default : {
          url : string | null
          width : number | null
          height : number | null
        }
        high : {
          url : string | null
          width : number | null
          height : number | null
        }
        medium : {
          url : string | null
          width : number | null
          height : number | null
        }
      }
      title : string | null
    }
  }[]
}

const Videos : React.FC < any > = ({videos}) => {
  return (
     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item : any,idx : number) => (
      <Box key={idx}>
        { item.id.videoId && <VideoCard video={item}/>}
        {/* { item.id.videoId && <ChannelCard/>} */}
      </Box>
      ))}
     </Stack>
  )
}

export default Videos;
