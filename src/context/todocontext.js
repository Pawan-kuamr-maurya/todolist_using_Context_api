import { createContext  ,useContext} from "react";
 const todocontest= createContext({
    todos:[{id:1,todo:"pawan",completed:false},],
    addtod:(todo)=>{},
    removetodo:(id,todo)=>{},
    update:(id,todo)=>{},
    togelComplete:(id)=>{}  
 });
export {todocontest};  

export function useTodo() {
  const context = useContext(todocontest);
  return context; // return the context value
}
export const Tododoprovider= todocontest.Provider; 