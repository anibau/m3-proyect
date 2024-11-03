//importar y crear el contexto 
import { createContext, useState } from "react";

export const UsersContext= createContext({
    users:[],
    setUsers: ()=>{},

});

//crear el componente PROVEEDOR
// eslint-disable-next-line react/prop-types
export const UsersProvider= ({children})=>{
    const [users, setUsers]= useState([]);
    return(
    <UsersContext.Provider value={{users, setUsers}}>{children}</UsersContext.Provider>
    )
}