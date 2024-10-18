
import {Facebook, Instagram, Tiktok} from 'react-bootstrap-icons'
const Footer= ()=>{
    return(<>
    <div className='containerFooter'>
        <p>Hecho con ❤</p>
        <div className='footerDivRight'>
            <p>Siguenos en redes 👀</p>
            <div >
                <Facebook className='divIcons'/>
                <Instagram className='divIcons'/>
                <Tiktok className='divIcons'/>
            </div>
        </div>
    </div>
    </>)
}
export default Footer