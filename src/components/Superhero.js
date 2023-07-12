import { Card, Col, Container, Row, Image} from 'react-bootstrap';
import antmanImg from "../assets/images/superhero/antman.jpg"
import avengerImg from "../assets/images/superhero/avenger.jpg"
import batmanImg from "../assets/images/superhero/batman.jpg"
import robinImg from "../assets/images/superhero/robinhood.jpg"
import spidermanImg from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImg from "../assets/images/superhero/superman.jpg"


const Superhero = () => {
   return (
      <div>
         <Container>
            <br />
            <br/>
            <h1 className='text-white'>SUPERHERO MOVIES</h1>
            <Row>
              <Col md={4} className='movieWrapper' id="superhero">
                <Card className=" text-white movieImage">
                  <Image src= {antmanImg} alt="Ken Movies" className='images' />
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">ANTMAN</Card.Title>
                     <Card.Text className="text-center">
                     Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. 
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 15 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col> 
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {avengerImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">AVENGERS</Card.Title>
                     <Card.Text className="text-center">
                     Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers.
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 20 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col> 
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {batmanImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">THE DARK KNIGHT</Card.Title>
                     <Card.Text className="text-center">
                     The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay he co-wrote with his brother.
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col> 
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {robinImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                     <Card.Text className="text-center">
                     Robin Hood is a 2018 American action-adventure film directed by Otto Bathurst and written by Ben Chandler.
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 8 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col>
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {spidermanImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">SPIDERMAN</Card.Title>
                     <Card.Text className="text-center">
                     Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man. 
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 10 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col>
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {supermanImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">SUPERMAN</Card.Title>
                     <Card.Text className="text-center">
                     Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder.
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 23 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Superhero