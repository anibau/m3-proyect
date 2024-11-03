import Home from "./Views/Home/Home";
import NavbarPet from "./Components/Navbar";
import Turnos from "./Views/Turnos/Turnos";
import Login from "./Views/Login/Login";
import Footer from "./Components/footer";
import Register from "./Views/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Error from "./Components/error";
import AgregarTurnos from "./Views/agregarTurno/agregarTurno";
import Baño from "./Views/Services/baño";
import Peluqueria from "./Views/Services/Peluqueria";


function App() {

  return (
    <>
    <main className="bodyS">
      <div className="corner-image corner-top-left"></div>
      <div className="corner-image corner-top-right"></div>
      <div className="corner-image corner-bottom-left"></div>
      <div className="corner-image corner-bottom-right"></div>
      <NavbarPet/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/appointments/:id" element={<Turnos/>}/>
        <Route path="/appointments/add/:id" element={<AgregarTurnos/>}/>
        <Route path="/service/baño" element={<Baño/>}/>
        <Route path="/service/peluqueria" element={<Peluqueria/>}/>
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
