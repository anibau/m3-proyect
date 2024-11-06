//importar y crear el contexto 
import { createContext, useState } from "react";

export const UsersContext= createContext({
    user:[],
    setUser: ()=>{},

});

//crear el componente PROVEEDOR
// eslint-disable-next-line react/prop-types
export const UsersProvider= ({children})=>{
    const [user, setUser]= useState([]);
    return(
    <UsersContext.Provider value={{user, setUser}}>{children}</UsersContext.Provider>
    )
}