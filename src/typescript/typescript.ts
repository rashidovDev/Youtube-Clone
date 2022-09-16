export interface IState {
    selectedCategory : string,
    setSelectedCategory : React.Dispatch<React.SetStateAction<string>>
}

export interface ISearch {
    searchTerm : string,
    setSearchTerm : React.Dispatch<React.SetStateAction<string>>
}

export interface User {
    id: number;
    name: string;
    role: string;
    active: boolean;
  }
  
  export const users: User[] = [
    { id: 11, name: "Sam", role: "Admin", active: true },
    { id: 19, name: "Kelly", role: "Salesperson", active: true },
    { id: 23, name: "John", role: "Manager", active: false }
  ];