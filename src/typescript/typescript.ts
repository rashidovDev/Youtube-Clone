export interface IState {
    selectedCategory : string,
    setSelectedCategory : React.Dispatch<React.SetStateAction<string>>
}

export interface ISearch {
    searchTerm : string,
    setSearchTerm : React.Dispatch<React.SetStateAction<string>>
}