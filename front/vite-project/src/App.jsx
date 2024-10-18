// import Home from "./Views/Home/Home";
import NavbarPet from "./Components/Navbar";
import Turnos from "./Views/Turnos/Turnos";
import Footer from "./Components/footer";

function App() {

  return (
    <>
    <main className="bodyS">
      <div className="corner-image corner-top-left"></div>
      <div className="corner-image corner-top-right"></div>
      <div className="corner-image corner-bottom-left"></div>
      <div className="corner-image corner-bottom-right"></div>
      <NavbarPet/>
      {/* <Home/> */}
      <Turnos/>
      <Footer/>
    </main>  
    </>
  )
}

export default App
