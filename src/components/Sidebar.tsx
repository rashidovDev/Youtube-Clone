import { Stack } from "@mui/material";
import { categories } from "../utils/data"; 
import {IState as Props} from "../typescript/typescript"

const Sidebar : React.FC <Props> = ({selectedCategory,setSelectedCategory}) => {
    return (
    <Stack
    direction = "row"
    sx = {{
        overflowY : "auto",
        height : { sx : "auto", md : "95%"},
        flexDirection : { md : "column"},
    }}
    >
        {categories.map((category,idx) => (
            <button key={idx} 
            onClick = {() => setSelectedCategory(category.name)}
            className="category-btn"
            style ={{ color : "#fff",background : (category.name === selectedCategory) ? "#6c6c6c" : ""}}
            >
              <img src={category.image} alt="icon" style={{width:"25px", height:"25px",
              borderRadius:"50%",marginRight:"10px"}}/>
              <span style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"hidden"}}>{category.name}</span>
            </button>
        ))}

    </Stack>
    )
}
 

export default Sidebar