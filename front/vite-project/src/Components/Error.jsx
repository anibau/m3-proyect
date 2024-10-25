import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error=()=>{
    const[second, setSecond]=useState(5);
    const navigate= useNavigate();

    useEffect(()=>{
        const contador= setInterval(()=>{
            setSecond((prevSecond)=>prevSecond-1)
        }, 1000)
        setTimeout(()=>{
            // clearInterval(contador);
            navigate('/home')
        },5000)
        return ()=>clearInterval(contador)
    }, [navigate]);

    return(<>
    <div className="divCompError">
        <h3>PAGE NOT FOUND 😥</h3>
        <p>Redirecting to home in {second} seconds ...</p>
    </div>
    </>)
}
export default Error