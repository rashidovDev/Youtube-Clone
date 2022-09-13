import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/data"
import Search from "./Search";

const Navbar : React.FC = () => (
  <Stack
  direction = "row"
  alignItems = "center"
  p = {2}
  sx = {{ position : "sticky", background : "#202020", top : 0, justifyContent : "space-between"}}
  >
    <Link to="/" style = {{ display : "flex", alignItems : "center"}}>
      <img src={logo} alt="logoItem" height={30} width={45}  />
    </Link>
    <Search /> 
  </Stack>
)


export default Navbar