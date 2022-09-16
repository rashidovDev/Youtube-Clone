import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Box } from "@mui/material"
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components/navigate";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => (
  <SkeletonTheme baseColor="#202020" highlightColor="#444" duration={1}>
  <BrowserRouter>
  <Box sx = {{backgroundColor : "#202020"}}>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/video/:id" element={<VideoDetail/>}/>
      <Route path="/channel/:id" element={<ChannelDetail/>}/>
      <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>
  </Box>
  </BrowserRouter>
  </SkeletonTheme>
)

export default App;
