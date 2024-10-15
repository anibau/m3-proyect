import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import perroBanandose from '../img/perro-bañandose-t.png'
const HomeDiv=()=>{
return (
    <>
    <main className='mainHome'>
    <Container className='d-flex flex flex-wrap'>
    <Row className='justify-content-center align-items-center'>
    <Col lg={6} md={10} >
        <h1 className='titleH'>PET GROOMING SERVICE</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia voluptate iusto, quam obcaecati nisi accusamus quisquam ea ipsam reprehenderit labore. At, nam. Consectetur ad praesentium iusto iure alias blanditiis.</p>
        <button className='btnH'>BOOK NOW</button>
        <button className='btnH'>READ MORE...</button>
    </Col>
    <Col  lg={4} md={4} xs={4}>
    <div className='imgHome'>
    <img src={perroBanandose} alt="" className='img-fluid imgH' />
    </div>
    </Col>
    </Row>
    </Container>
    </main>
    </>
)
}
export default HomeDiv