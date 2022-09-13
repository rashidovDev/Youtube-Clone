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
              
              <span style={{ marginRight : "15px"}}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
        ))}

    </Stack>
    )
}
 

export default Sidebar