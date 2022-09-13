import {Stack, Box} from "@mui/material";
import {ChannelCard, VideoCard} from "../components/navigate"

interface IState {
  videos : any
}

const Videos : React.FC <IState> = ({videos}) => {
  return (
     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      <Box >
        <VideoCard/>
        <ChannelCard/>
      </Box>
     </Stack>
  )
}

export default Videos