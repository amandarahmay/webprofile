import {Card, Button, Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import foto2 from "./manda.jpeg";
import foto3 from "./manda2.jpeg";
import foto4 from "./foto4.jpg";
import foto5 from "./unri.jpg";
import foto6 from "./foto6.jpeg";
import foto7 from "./foto7.jpeg";

const Gallery = () => {
    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={foto5} />
                            <Card.Body>
                                <Card.Title>Me</Card.Title>
                                <Card.Text>
                                    RIAU UNIVERSITY
                                </Card.Text>
                                <Button variant="primary">Download</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={foto3} />
                        <Card.Body>
                            <Card.Title>In Street</Card.Title>
                            <Card.Text>
                                SKA MALL PEKANBARU
                            </Card.Text>
                            <Button variant="primary">Download</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={foto4} />
                        <Card.Body>
                            <Card.Title>Engagement</Card.Title>
                            <Card.Text>
                                PERAWANG, RIAU
                            </Card.Text>
                            <Button variant="primary">Download</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={foto2} />
                        <Card.Body>
                            <Card.Title>Mirror Selfie</Card.Title>
                            <Card.Text>
                                MALL SKA PEKANBARU
                            </Card.Text>
                            <Button variant="primary">Download</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={foto6} />
                        <Card.Body>
                            <Card.Title>Fotography</Card.Title>
                            <Card.Text>
                                MALL SKA PEKANBARU
                            </Card.Text>
                            <Button variant="primary">Download</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={foto7} />
                        <Card.Body>
                            <Card.Title>OOTD</Card.Title>
                            <Card.Text>
                                MALL SKA PEKANBARU
                            </Card.Text>
                            <Button variant="primary">Download</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Gallery;