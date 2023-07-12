import { Card, Col, Container, Row, Image} from 'react-bootstrap';
import kenImg from "../assets/images/trending/ken.jpg"
import barbieImg from "../assets/images/trending/barbie.jpg"
import allanImg from "../assets/images/trending/allan.jpg"
import pinkImg from "../assets/images/trending/pink.jpg"
import princesImg from "../assets/images/trending/princes.jpg"
import dancingImg from "../assets/images/trending/12dancing.jpg"


const Trending = () => {
   return (
      <div>
         <Container>
            <br />
            <br/>
            <h1 className='text-white'>TRENDING MOVIES</h1>
            <Row>
              <Col md={4} className='movieWrapper' id="trending">
                <Card className=" text-white movieImage">
                  <Image src= {kenImg} alt="Ken Movies" className='images' />
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">HE'S JUST KEN</Card.Title>
                     <Card.Text className="text-center">
                     Barbie, Warner Bros.’ Greta Gerwig-directed Mattel movie, will hit theaters July 21, 2023. 
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 2 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col> 
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {barbieImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">BARBIE IS EVERYTHING</Card.Title>
                     <Card.Text className="text-center">
                     Barbie, Warner Bros.’ Greta Gerwig-directed Mattel movie, will hit theaters July 21, 2023. 
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col> 
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {allanImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">THERE'S ONLY ON ALLAN</Card.Title>
                     <Card.Text className="text-center">
                     Barbie, Warner Bros.’ Greta Gerwig-directed Mattel movie, will hit theaters July 21, 2023.
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 1 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col> 
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {pinkImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">BIG CITY BIG DREAMS</Card.Title>
                     <Card.Text className="text-center">
                     This film plot follows Barbie swapping the sunny shores of Malibu for the bright lights of Broadway.
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col>
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {princesImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">PRINCESS ADVENTURE</Card.Title>
                     <Card.Text className="text-center">
                     Barbie takes a road trip to the Kingdom of Floravia, having being invited by Floravia's princess Amelia.
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col>
              <Col md={4} className='movieWrapper'>
                <Card className=" text-white movieImage">
                  <Image src= {dancingImg} alt="Ken Movies" className='images'/>
                <div className="bg-dark">
                  <div className="p-2 m-1">
                     <Card.Title className="text-center">12 DANCING PRINCESS</Card.Title>
                     <Card.Text className="text-center">
                     Genevieve is one of twelve princesses who share a passion for dancing and live in a castle. 
                     </Card.Text>
                     <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                  </div>
                 </div>
                 </Card>
              </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Trending