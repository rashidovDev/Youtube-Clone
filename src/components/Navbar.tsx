import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/data"
import {Search,Account} from "./navigate";

const Navbar : React.FC = () => (
  <Stack
  direction = "row"
  alignItems = "center"
  p = {2}
  sx = {{ position : "sticky", top : 0, justifyContent : "space-between",background:"#252525"}}
  >
    <Link to="/" style = {{ display : "flex", alignItems : "center",marginRight:"20px"}}>
      <img src={logo} alt="logoItem" height={30} width={45}/>
    </Link>
    <Search />
    <Account/>
  </Stack>
)


export default Navbar