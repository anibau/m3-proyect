import { Link } from "react-router-dom";
import peluqueriaMascotas from '../../img/peluqMascotasRbga.png';
import '../Services/peluqueria.css';

const Peluqueria=()=>{
    return(<>
    <div className="containerPeluqueria">
        <div className="divTexto">
            <h2>PET GROOMING</h2>
            <h5>HAIRCUT PET</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sequi, reprehenderit illum minima veritatis voluptas fugiat eum commodi cum nam suscipit blanditiis nostrum incidunt placeat accusamus? Magnam nulla placeat obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dignissimos ducimus deleniti blanditiis eum eos dolorum perspiciatis corrupti? Consequuntur laboriosam temporibus ea laudantium omnis optio odit incidunt dolorum recusandae possimus?</p>
            <Link className="btnPeluqueria" to={'/appointment/add'}>Separa tu cita</Link>
        </div>
        <img src={peluqueriaMascotas} alt="" />
    </div>
    </>)
}
export default Peluqueria