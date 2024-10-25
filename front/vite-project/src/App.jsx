import Home from "./Views/Home/Home";
import NavbarPet from "./Components/Navbar";
import Turnos from "./Views/Turnos/Turnos";
import Login from "./Views/Login/Login";
import Footer from "./Components/footer";
import Register from "./Views/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Error from "./Components/error";

function App() {
  const location= useLocation();

  return (
    <>
    <main className="bodyS">
      <div className="corner-image corner-top-left"></div>
      <div className="corner-image corner-top-right"></div>
      <div className="corner-image corner-bottom-left"></div>
      <div className="corner-image corner-bottom-right"></div>
      {location.pathname!=='/'&& <NavbarPet/>}
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/appointments" element={<Turnos/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </main>  
    </>
  )
}

export default App
