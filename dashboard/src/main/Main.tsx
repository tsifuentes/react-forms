import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Main = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/slide1.svg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/slide2.svg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/slide3.svg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <Row style={{marginTop: 25}}>
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                            <Card.Title>New</Card.Title>
                            <Card.Text>
                                JSX
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                            <Card.Title>New</Card.Title>
                            <Card.Text>
                                JSX
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop: 25, marginBottom: 25}}>
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                            <Card.Title>New</Card.Title>
                            <Card.Text>
                                JSX
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                            <Card.Title>New</Card.Title>
                            <Card.Text>
                                JSX
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};