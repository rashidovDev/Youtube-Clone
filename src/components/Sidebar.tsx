import { Category } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { IState as ICategory} from "../typescript/typescript"
import { categories } from "../utils/data";


interface IState {
    setSelectedCategory: React.Dispatch<React.SetStateAction<ICategory["content"]>>
    selectedCategory: ICategory["content"]
}

const Sidebar : React.FC<IState> = ({selectedCategory, setSelectedCategory}) => (
    <Stack
    direction = "row"
    sx = {{
        overflowY : "auto",
        height : { sx : "auto", md : "95%"},
        flexDirection : { md : "column"},
    }}
    >
        {categories.map((item,idx) => (
            <button key={idx} 
            className="category-btn"
            style ={{ color : "#fff"}}
            >
              <span style={{ marginRight : "15px"}}>{item.icon}</span>
              <span>{item.name}</span>
            </button>
        ))}
    </Stack>
)
 

export default Sidebar