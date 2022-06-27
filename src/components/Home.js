import {Carousel, Card, Button} from "react-bootstrap";
import foto6 from "./bg_frozen.jpg";
import foto7 from "./waef.PNG";
import foto8 from "./manda2.jpeg";
import foto9 from "./manda.jpeg";



const Home = () => {
    return(
        <div>
            <Carousel>
                <Carousel.Item style={{height:"600px"}}>
                    <img
                        className="d-block w-100"
                        src={foto6}alt="" style={{height : "600px", width : "100px", margin : "20px"}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Hello</h3>
                        <p>Welcome to my Web Profile</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height:"600px"}}>
                    <img
                        className="d-block w-100"
                        src={foto7}alt="" style={{height : "600px", width : "0px", margin : "20px"}}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Amanda Rahma Yanti</h3>
                        <p>Class D</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height:"600px"}}>
                    <img
                        className="d-block w-100"
                        src={foto8}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>My education</h3>
                        <p>Sultan Syarif State Islamic University</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Home;