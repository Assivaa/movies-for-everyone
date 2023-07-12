import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
   return (
   <div className='intro'>
      <Container className='text-white text-center d-flex justify-content-center align-items-center'>
         <Row>
            <Col>
               <div className='title'>MOVIES</div>
               <div className='title'>FOR EVERYONE</div>
               <div className='introButton mt-4 text-center'>
                  <br />
                  <Button variant="light">See All Movies</Button>
               </div>
            </Col>
         </Row>
      </Container>
   </div>
   )
}

export default Intro