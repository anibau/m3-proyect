import { createContext, useState } from "react";
export const AppointmentContext= createContext({
    appointments: [],
    setAppointments: ()=>{},
});

// eslint-disable-next-line react/prop-types
export const AppointmentProvider= ({children})=>{
    const [appointments, setAppointments]= useState([]);
    return(<AppointmentContext.Provider value={{appointments, setAppointments}} >{children}</AppointmentContext.Provider>)
}