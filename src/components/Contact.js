import {Card, Col, Container, Row} from "react-bootstrap";
import background from "./logo.jpg";
import logo from "./logoamanda.png";
import fb from "./fb.png";
import ig from "./ig.png";
import twitt from "./tw.png";
import wa from "./wa.png";

const Contact = () => {
    return(
        <div>
            <Card className="bg-dark text-black">
                <Card.Img src={background} alt="Card image" />
                <Card.ImgOverlay>
                    <img src={logo}/>
                    <Card.Title> My Social Media</Card.Title>
                    <Container fluid="md">
                        <Row>
                            <Col>
                                <img src={fb}style={{height : "50px", width : "50px", margin : "30px"}}/>
                                <p> Amandaa Rahmaa </p>
                            </Col>
                            <Col>
                                <img src={ig}style={{height : "50px", width : "50px", margin : "30px"}}/>
                                <p> @amandaa.rhma </p>
                            </Col>
                            <Col>
                                <img src={twitt}style={{height : "50px", width : "50px", margin : "30px"}}/>
                                <p> @reeddveelvett </p>
                            </Col>
                            <Col>
                                <img src={wa}style={{height : "50px", width : "50px", margin : "30px"}}/>
                                <p> 0895354415906 </p>
                            </Col>
                        </Row>
                    </Container>

                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Contact;