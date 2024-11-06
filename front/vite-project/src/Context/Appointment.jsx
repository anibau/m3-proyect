import { createContext, useState } from "react";
export const AppointmentContext= createContext({
    userAppointments: [],
    setUserAppointments: ()=>{},
});

// eslint-disable-next-line react/prop-types
export const AppointmentProvider= ({children})=>{
    const [userAppointments, setUserAppointments]= useState([]);
    return(<AppointmentContext.Provider value={{userAppointments, setUserAppointments}} >{children}</AppointmentContext.Provider>)
}