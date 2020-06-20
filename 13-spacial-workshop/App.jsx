import React, { Component } from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Button,
    Jumbotron,
    Badge,
    Form,
    FormControl,
} from 'react-bootstrap';
import './style.css';

const NASA_API = 'https://api.nasa.gov/';
const API_KEY = 'api_key=rOI9SGtuJbeH61dcvjxZz8eXURdOvTzGpcTJTKL7';

class App extends Component {
    state = {
        nombre: 'API Espacial',
        photos: [],
    };

    componentDidMount() {
        fetch(
            `${NASA_API}mars-photos/api/v1/rovers/curiosity/photos?sol=10&${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({ photos: data.photos });
            });
    }

    cambiar = () => {
        this.setState({ nombre: 'Otra cosa' });
    };

    render() {
        return (
            <>
                <Navbar bg="dark" className="justify-content-between">
                    <Navbar.Brand className="display-6 text-white" as="h2">
                        {this.state.nombre}
                    </Navbar.Brand>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
                <Container as="main">
                    <Row className="justify-content-md-center my-4">
                        <Col>
                            <Jumbotron>
                                <h1>
                                    ¿Qué puedes crear{' '}
                                    <Badge variant="dark">hoy</Badge>?
                                </h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Quas atque qui officiis ab
                                    rerum doloremque numquam nobis modi! Ad
                                    voluptatibus consequuntur eius sunt magnam
                                    incidunt quae laborum officia in nesciunt?
                                </p>
                                <Button onClick={this.cambiar}>
                                    Cualquier cosa!
                                </Button>
                            </Jumbotron>
                        </Col>
                    </Row>

                    <Row>
                        {this.state.photos.map((photo) => (
                            <img src={photo.img_src} alt="" />
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default App;
